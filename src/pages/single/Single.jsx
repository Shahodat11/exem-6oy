import axios from '../../api'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../single/single.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import off from '../../assets/Main.svg'
import singleImg1 from '../../assets/Main (1).svg'
import singleImg2 from '../../assets/Main → Button.svg'
import singleImg3 from '../../assets/Main → Link - Add To Wishlist.svg'
import singleImg4 from '../../assets/Main → Link - Compare.svg'
import Img1 from '../../assets/Main (2).svg'
import Img2 from '../../assets/Main (3).svg'
import Img3 from '../../assets/Main (4).svg'
import FooterTop from "../../components/footerTop/FooterTop";
import FooterBottom from "../../components/footerBottom/FooterBottom";

function Single() {
  const {id}=useParams()
  const [product,setProduct]=useState(null)

  useEffect(()=>{
    axios
      .get(`/products/${id}`)
      .then(res=>setProduct(res.data))
      .catch(err=>console.log(err))
  },[id])

  
  return (
    <div className='container'>
      <Navbar/>
      <Header/>
      <div className="nav-linkk">
        <div className="nav-link5">
          <div className="navs5">
            <div className="navv">
              <div>
                <img className='single__imgg' src={product?.image} alt="" />
                <div className="singleImg">
                  <img className='single__img' src={product?.image} alt="" />
                  <img className='single__img' src={product?.image} alt="" />
                  <img className='single__img' src={product?.image} alt="" />
                  <img className='single__img' src={product?.image} alt="" />
                </div>
              </div>
              <div className="navv1">
                <img className='off' src={off} alt="" />
                <h2 className='title__h2'>{product?.title}</h2>
                <p className='rating__p'>Rating {product?.rating.rate}</p>
                <div className='price'><p className='card__price__p'>${product?.price}</p></div>  
                <p className='lorem'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi,
                  odio minus dolore impedit fuga eum eligendi.</p> 
                  <div className="kg">
                    <p className='size'>Size / Weight:</p>
                    <p className='g'>50g</p>
                    <p className='g'>60g</p>
                    <p className='g'>80g</p>
                    <p className='g'>100g</p>
                    <p className='g'>150g</p>
                  </div>
                  <div className="single">
                    <img src={singleImg1} alt="" />
                    <img src={singleImg2} alt="" />
                    <img src={singleImg3} alt="" />
                    <img src={singleImg4} alt="" />
                  </div>
              </div>
            </div>
            <div className="nav-linkss">
              <div className="nav-link6">
                <h4>Description</h4>
                <h4>Additional info</h4>
                <h4>Vendor</h4>
                <h4>Reviews (3)</h4>
              </div>
              <p className='pp'>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced
                goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.
                Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and
                wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch
                mastodon goodness gnashed a jellyfish and one however because.
              </p>
              <div className="lii">
                <h4 className='li'>Type Of Packing</h4>
                <h4 className='li'>Color</h4>
                <h4 className='li'>Quantity Per Case</h4>
                <h4 className='li'>Ethyl Alcohol</h4>
                <h4 className='li'>Piece In One</h4>
              </div>
              <p className='pp4'>Laconic overheard dear woodchuck wow this outrageously taut beaver hey hello far meadowlark imitatively egregiously hugged that yikes
                minimally unanimous pouted flirtatiously as beaver beheld above forward energetic across this jeepers beneficently cockily less a the
                raucously that magic upheld far so the this where crud then below after jeez enchanting drunkenly more much wow callously irrespective
                limpet.</p>
                <h4 className='top'>Packaging & Delivery</h4>
                <p className='top__p'>Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one
                  assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much
                  held one exuberantly sheep goodness so where rat wry well concomitantly.</p>
                <p className='top__p'>Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and
                  next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less
                  across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.</p>
                <h4 className='top__h4'>Suggested Use</h4>
                <p className='top__p'>Refrigeration not necessary.</p>
                <p className='top__p'>Stir before serving</p>
                <h4 className='top__h4'>Other Ingredients</h4>
                <p className='top__p'>Organic raw pecans, organic raw cashews.</p>
                <p className='top__p'>This butter was produced using a LTG (Low Temperature Grinding) process</p>
                <p className='top__p'>Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy or soy</p>
                <h4 className='top__h4'>Warnings</h4>
                <p className='top__p'>Oil separation occurs naturally. May contain pieces of shell.</p>
            </div>
          </div>
          <div className="navv1">
            <img src={Img1} alt="" />
            <img src={Img2} alt="" />
            <img src={Img3} alt="" />
          </div>
        </div>
      </div>
      <FooterTop/>
      <FooterBottom/>
    </div>
  )
}

export default Single