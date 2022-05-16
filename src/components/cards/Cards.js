import React from 'react';
import CardItem from '../cardItem/CardItem';
import './Cards.css';


function Cards() {
    return (
      <div className='cards'>
        <h1> Check out these EPIC Destibation!</h1>
        <div className='cards_container'>
         <div className='cards_wrapper'>
          <ul className='cards_items'>
           <CardItem 
            src='images2/img-9.jpg'
            text='Explore the hidden waterfall deep inside the Amazon Jungle'
            label='Adventure'
            path='/services'
           />   

           <CardItem 
            src='images2/img-2.jpg'
            text='Travel through the island of Bali in a Private Cruise'
            label='Luxury'
            path='/services'
           />         
          </ul>

          <ul className='cards_items'>
           <CardItem 
            src='images2/img-3.jpg'
            text='Set Sail in the Atlantic Ocean visiting'
            label='Mystery'
            path='/services'
           />   

           <CardItem 
            src='images2/img-4.jpg'
            text='Experience Football on top of the Himilayan'
            label='Adventure'
            path='/products'
           />   

           <CardItem 
            src='images2/img-8.jpg'
            text='Ride through the Sahara Desert on a guide'
            label='Adrenaline'
            path='/sign-up'
           />   

          </ul>
         </div>
        </div>


      </div>


    )
}

export default Cards;