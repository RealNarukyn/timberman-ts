//
//  BMGlyphFont.swift
//  bmGlyphLabelS
//
//  Created by Stéphane QUERAUD on 20/02/2016.
//  Copyright © 2016 Stéphane QUERAUD. All rights reserved.
//

import Foundation
import SpriteKit


open class BMGlyphFont: NSObject, XMLParserDelegate {
    
    var lineHeight: Int
    var kernings: [AnyHashable: Any]
    var chars: [AnyHashable: Any]
    var charsTextures: [AnyHashable: Any]
    var textureAtlas: SKTextureAtlas

    open class func fontWithName(_ name: String) -> BMGlyphFont {
        return BMGlyphFont(name: name)
    }
    
    public init(name: String) {
            lineHeight = 0
            kernings = [AnyHashable: Any]()
            chars = [AnyHashable: Any]()
            charsTextures = [AnyHashable: Any]()
            textureAtlas = SKTextureAtlas(named: name)
            super.init()
        
            let fontFile: String = "\(name)\(getSuffixForDevice())"
        
            let path: URL = Bundle.main.url(forResource: fontFile, withExtension: "xml")!
            let data: Data = try! Data(contentsOf: path)
        
            let parser: XMLParser = XMLParser(data: data)
            parser.delegate = self
            parser.parse()
    }
    
    func getSuffixForDevice() -> String {
        var suffix: String = ""
        var scale: CGFloat
        if (UIScreen.main.responds(to: #selector(getter: UIScreen.nativeScale))) {
            scale = UIScreen.main.nativeScale
        }
        else {
            scale = UIScreen.main.scale
        }
        if scale == 2.0 {
            suffix = "@2x"
        }
        else if scale > 2.0 && scale <= 3.0 {
            suffix = "@3x"
        }
        
        return suffix
    }
    
    func xAdvance(_ charId: unichar) -> Int {
        let v = self.chars["xadvance_\(Int(charId))"]
        
        if (v != nil) {
            return Int(v as! NSNumber)
        }
        else {
            return 0;
        }
    }
    
    func xOffset(_ charId: unichar) -> Int {
        let v = self.chars["xoffset_\(Int(charId))"]
        
        if (v != nil) {
            return Int(v as! NSNumber)
        }
        else {
            return 0;
        }
    }
    
    func yOffset(_ charId: unichar) -> Int {
        let v = self.chars["yoffset_\(Int(charId))"]
        
        if (v != nil) {
            return Int(v as! NSNumber)
        }
        else {
            return 0;
        }
    }
    
    func kerningForFirst(_ first: unichar, second: unichar) -> Int {
        
        let v = self.kernings["\(Int(first))/\(Int(second))"]
        
        if (v != nil) {
            return Int(v as! NSNumber)
        }
        else {
            return 0;
        }
    }
    
    func textureFor(_ charId: Int) -> SKTexture {
        return self.textureAtlas.textureNamed("\(charId)")
    }
    
    open func parser(_ parser: XMLParser, didStartElement elementName: String, namespaceURI: String?, qualifiedName qName: String?, attributes attributeDict: [String : String]) {
    
        if (elementName == "kerning") {
            let first: Int = Int(attributeDict["first"]!)!
            let second: Int = Int(attributeDict["second"]!)!
            let amount: Int = Int(attributeDict["amount"]!)!
            self.kernings["\(Int(first))/\(Int(second))"] = amount
        }
        else if (elementName == "char") {
            let charId: Int = Int(attributeDict["id"]!)!
            let xadvance: Int = Int(attributeDict["xadvance"]!)!
            let xoffset: Int = Int(attributeDict["xoffset"]!)!
            let yoffset: Int = Int(attributeDict["yoffset"]!)!
            self.chars["xoffset_\(Int(charId))"] = xoffset
            self.chars["yoffset_\(Int(charId))"] = yoffset
            self.chars["xadvance_\(Int(charId))"] = xadvance
            self.charsTextures["\(Int(charId))"] = self.textureFor( charId )
        }
        else if (elementName == "common") {
            self.lineHeight = Int(attributeDict["lineHeight"]!)!
        }
        
    }
}
