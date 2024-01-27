import Tour from './components/Tour';
import { useState } from 'react';
import './App.css';

function App() {
   const [tourdata,newdata]=useState([
    {
   'id':1,    
   'img_url':'https://media.istockphoto.com/id/1291961188/photo/stunning-view-of-the-hawa-mahal-at-sunset-with-blurred-people-walking-during-the-covid-19.jpg?s=1024x1024&w=is&k=20&c=D8GS6Oxytsf7IVj751ue4FDxpgHmNE8l-QDt6VrLoPM=',
   'price':'₹ 5,568',
   'city':'Jaipur',
   'details':'The Hawa Mahal is a palace in the city of Jaipur, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women chambers.'
    },
    {
        'id':2, 
     'img_url':'https://media.istockphoto.com/id/469085364/photo/the-taj-mahal-in-the-morning.jpg?s=1024x1024&w=is&k=20&c=Yxt0L6uJRw_Ltzh0XzpWkVwBkPRTqqTCLVTah4D2Wjw=',
     'price':'₹ 4,500',
     'city':'Agra',
     'details':'The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his beloved wife, Mumtaz Mahal'
    },
    {
        'id':3, 
     'img_url':'https://media.istockphoto.com/id/535168027/photo/india-goa-palolem-beach.jpg?s=1024x1024&w=is&k=20&c=ij0wFHNhE5fd3DuLxlP4K4z7jlaJ9JTmqWZz4SYK_-g=',
     'price':'₹ 7,500',
     'city':'Goa',
     'details':'Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. '
    },
    {
        'id':4, 
     'img_url':'https://media.istockphoto.com/id/1295459152/photo/evening-view-of-katra-town.jpg?s=1024x1024&w=is&k=20&c=AU9mwWsSn62ZhITVwzmSHBwBzA5yjTx_GEZ4Eig-b0Y=',
     'price':'₹ 4,500',
     'city':'Katra',
     'details':'Vaishno Devi is a manifestation of the Hindu mother goddess Lakshmi sometimes in some beliefs Vaishno Devi is considered a manifestation of goddess Mahalakshmi'
    },
    {
        'id':5, 
     'img_url':'https://media.istockphoto.com/id/1416018492/photo/teenager-indian-girl-hiking-on-mountain-with-backpack-in-manali-himachal-pradesh-india-female.jpg?s=1024x1024&w=is&k=20&c=K7A52s--JPTgYDweqGYkQmPqroT1dziPphjOutPxbk8=',
     'price':'₹ 9,500',
     'city':'Manali',
     'details':'Manali is a high-altitude Himalayan resort town in India northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination'
    },
    {
        'id':6, 
     'img_url':'https://media.istockphoto.com/id/463741265/photo/landscape-in-india-kerala.jpg?s=1024x1024&w=is&k=20&c=iYJs-vPJN2r4sM8M5xk7NCgh3_chZH62YVhKbsj_EXY=',
     'price':'₹ 8,500',
     'city':'Kerala',
     'details':'Kerala, a state on India tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline. It known for its palm-lined beaches and backwaters, a network of canals. Inland are the Western Ghats, mountains whose slopes support tea, coffee and spice plantations as well as wildlife'
    },
    {
        'id':7, 
     'img_url':'https://media.istockphoto.com/id/539105384/photo/kedarnath-in-india.jpg?s=1024x1024&w=is&k=20&c=m_bsZ55eow_uOF4w47A2aRrpqtFQZvNGS4pX-6kZjn0=',
     'price':'₹ 8,690',
     'city':'Kedarnath',
     'details':'Kedarnath is a town and Nagar Panchayat in Rudraprayag district of Uttarakhand, India, known primarily for the Kedarnath Temple'
    },
    {
        'id':8, 
     'img_url':'https://media.istockphoto.com/id/860528756/photo/the-bandraworli-sea-link-mumbai-india.jpg?s=1024x1024&w=is&k=20&c=sazSotI_PFfzE8bUSLzMDUBEAgzj7mM3ot_WKiCTgWc=',
     'price':'₹ 12,500',
     'city':'Mumbai',
     'details':'Mumbai (formerly called Bombay) is a densely populated city on India west coast. A financial center, it India largest city.'
    },
    {
        'id':9, 
     'img_url':'https://media.istockphoto.com/id/1312550959/photo/the-city-of-london-skyline-at-night-united-kingdom.jpg?s=1024x1024&w=is&k=20&c=D5Jt0lH_IH8FrLWQHqlE9zpMmFBEVTnKHjXLktc5_oM=',
     'price':'₹ 23,500',
     'city':'London',
     'details':'London is a densely populated city on United Kingdom. A financial center, it India largest city.'
    },
    ]
);
   function removeTour(id){
   const update_data=tourdata.filter(tour=>tour.id!==id);
   newdata(update_data);
   }
  return (
    <div>
    <Tour details={tourdata} removeTour={removeTour}></Tour>
    </div>
  );
}

export default App;
