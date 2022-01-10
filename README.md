# [Timberman](https://realnarukyn.github.io/timberman-ts/)

<p align="center">
  <img src="./public/img/timberman-front-page.jpg">
</p>

## Technologies

I tried to use the minimun amount of dependencies as posible because I like to write code... :)

- npm (supporter)
- Typescript
- Eslint
- Prettier
- Parcel
- Rimraf

_And I don't really think that I need more dependencies or modules_

## Setting Up The Project!

To download and start the project you need to run the following commands:

1 - Clone the project into your local pc

```bash
git clone https://github.com/RealNarukyn/timberman-ts.git
```

2 - Move into it

```bash
cd timberman-ts
```

3 - Install all the necessary dependencies (_you can check them in the package.json_)

```bash
npm install
```

## Commands Availables

Once you've set up the project you're ready to run develop or test the game! Here there are different options.

- Start the project _(build the game and runs index.html)_

  ```bash
  npm start || npm run start
  ```
  
- Start the project in dev mode _(runs typescript files)_

  ```bash
  npm run dev
  ```
  
- Clean the old files _(removes docs, dist and .parcel-cache directories)_

  ```bash
  npm run clean
  ```
  
- Creates a build prepared to be loaded in GitHub Pages

  ```bash
  npm run ghbuild
  ```
  
- Build the game _(removes build folder -> builds game with ghbuild)_

  ```bash
  npm run build
  ```

- Apply Prettier-Format _(runs prettier formatter to all files inside src folder)_

  ```bash
  npm run prettier-format
  ```

## Deployment

In case you're thinking about making a deployment you need to:

1. Create a new build with all the changes you've done.

   _You'll get direct points to my heart if you format the code before_

2. If you were working in a different branch from main _(well done✔️✔️)_ merge the changes to the main branch.

   In case you were working directly on the main branch _(baad!!❌❌)_ you're a psycho killer, a sith, a very very bad person, the worst of your kind... But anyway 
   
   ![it is what it is](./public/gifs/whatitis.gif)

3. Do a push from your local main branch to the remote.

4. Grab your holy book (in @amargopastor case I think it's CleanCode...)

5. And finally... **PRAY!**

6. If everything went right you can check your changes [here](https://realnarukyn.github.io/timberman-ts/)!

## License

I just copied the License.md from the project I took the resources from.

## Honorable mentions

- Thanks to [@spritekitbook](https://github.com/spritekitbook/timberman-swift), the project I took the app icon resource from.
- Thanks to [soluka.fr](https://soluka.fr/blog/archives/phaser-2-creer-timberman-en-html5-canvas/), the webpage I took the game resources such as sprites and sounds from.
- Thanks to my mom who said that I can full-time work and study at the same time and now I'm losing my hair.
