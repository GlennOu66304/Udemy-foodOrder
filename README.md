Project Demo:  
[ADVENTURE AWAITS](https://reacttrip2.herokuapp.com/)

## Build the project: follow the link below to build the project:
1.[hotelReservation README](https://github.com/GlennOu66304/hotelReservation)    
2.initial file:  
Clean the src file only leave the  
App.css(empty all the css command)    
App.js:
```
import react from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Yo</h1>
    </div>
  );
}

export default App;
```
Index.js:
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render( <App />
 , document.getElementById('root')
);
```
## ont awesome CDN:

Put the font awesome into the index.html, to allow the app using the font awesome:  
```
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
```
[Font Awesome CDN](https://fontawesome.com/account/cdn)  

## <Link>

To utilize the Link from the react-router dom, you need to 1.install the react dom
```
 npm install react-router-dom 
```
2.import the link from the react-router-dom
```
import {Link} from 'react-router-dom';
```

3.set the a path to the link  
```
<Link to="/about">About</Link>

```
[Link](https://reactrouter.com/web/api/NavLink)   

## BrowserRouter
<BrowserRouter> to updae the information
	[<BrowserRouter>](https://reactrouter.com/web/api/BrowserRouter)  

## Using the State
Utilize the sate(effect change), but you do not need to write the class

[Using the State Hook](https://reactjs.org/docs/hooks-state.html)   

Updae the final change into the app.js file:  

## ES6 Arrow function: 
parmaters + arrow => + function details + semicolon
full code:  
```
a => a + 100;
```
[Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)   

Handle Event in the React:  
onClick + = + {}
```
<button onClick={activateLasers}>
  Activate Lasers
</button>
```
[Handling Events](https://reactjs.org/docs/handling-events.html)   

## Conditional (ternary) operator

condition +? + exprIfTrue +: + exprIfFalse
```
isMember ? '$2.00' : '$10.00'
```

[Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)  

Bug fixing: Video not playing 
You need to put the video into the public folder, then change the CSS code int the z-indedx: -1; to the code below: 
```
z-index: -1;
```
The final code is below:
```
<video src='/videos/video-2.mp4' autoPlay loop muted />
```

# Bug fxing, you could not see the CSS style into the image in img-9.jpg and picture too.  
1.First you need to move the duplicte image to the public folder;   
2.Second, you need to remove the extrta spece the css code in the Cards.css
Like cards__container to cards_container

## Hero section Image and Video shift:  

If you want to change the vide to the image, then you need to delete the code below in the Hero sections.js
```
  <video src='/videos/video-2.mp4' autoPlay loop muted />
 ```
Then uncomment the code in the below in  the HeroSections.css
```
background: url('/src/images/img-home.jpg') center center/cover no-repeat;
```

Do not leave the semilicon between the image and center.

or replace the video:  
```
 <video src='/videos/video-1.mp4' autoPlay loop muted />  
```
Make sure that you comment the code below in the HeroSection.css
```
background: url('/src/images/img-home.jpg') center center/cover no-repeat;
```
## Upload the Project to the Heroku
### Bug fixing:  Heroku build failing due to Yarn and npm lockfile conflict
[Heroku build failing due to Yarn and npm lockfile conflict](https://stackoverflow.com/questions/47238241/heroku-build-failing-due-to-yarn-and-npm-lockfile-conflict)   

### Pushing To Heroku Fails - No Such App Fatal
[Pushing To Heroku Fails - No Such App Fatal](https://stackoverflow.com/questions/34379130/pushing-to-heroku-fails-no-such-app-fatal)   


Main refernece:  
[How to deploy create-react-app to Heroku](https://www.youtube.com/watch?v=zDiQrgeGTuU)   
[Deploying React with Zero Configuration](https://blog.heroku.com/deploying-react-with-zero-configuration)   
[Heroku Buildpack for create-react-app](https://github.com/mars/create-react-app-buildpack#usage)   

## Resoure:
### Project Resource:  
[React Website Tutorial - Beginner React JS Project Fully Responsive](https://www.youtube.com/watch?v=I2UBjN5ER4s&list=PLs1fqgQpnCmJSkrDA2wTsSsLnYpE8jpVy&index=4&t=122s)  
[source Code](https://github.com/briancodex/react-website-v1/tree/starter)  
### React Knowledge Resource:  
[hotelReservation README](https://github.com/GlennOu66304/hotelReservation)   
[React Quick Learning:](https://github.com/GlennOu66304/hotelReservation/blob/master/README1.md)   