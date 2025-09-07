import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RealateProducts from '../components/RealateProducts';

const Product = () => {

  const {productId} = useParams();
  const {products,currency, addToCart } = useContext(ShopContext);
  const [productsData, setProductsData] = useState(false);
  const [image,setImage] = useState('');
  const [size,setSize] = useState('');
  

  const fetchProductData = async()=>{

    products.map((item)=>{
      if(item._id === productId){
        setProductsData(item);
        setImage(item.image[0])
       
        return null;
      }
    })
  };

  useEffect(()=>{
    fetchProductData();
  },[productId,products])


  return productsData? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* product image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row '>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full '>
            {
              productsData.image.map((item,index)=>(
                <img onClick={()=> setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt='' />
              ))
            }
            
          </div>
          <div className='w-full sm:w-[80%] '>
            <img  src={image} className='w-full h-auto' alt=''/>

          </div>

        </div>
        {/* ------------------product-info----------------- */}
        <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2'>{productsData.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
              <img src={assets.star_icon} className='w-3 5' />
              <img src={assets.star_icon} className='w-3 5' />
              <img src={assets.star_icon} className='w-3 5' />
              <img src={assets.star_icon} className='w-3 5' />
              <img src={assets.star_dull_icon} className='w-3 5' />
              <p className='pl-2'>(122)</p>
            </div>
            <p className='mt-5 text-3xl font-medium'>{currency}{productsData.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5'>{productsData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
              <p>Select Size</p>
              <div className='flex gap-2'>
                {
                  productsData.sizes.map((item,index)=>(
                    <button onClick={()=>setSize(item)} className={`border border-gray-200 py-2 px-4 bg-gray-100 ${ item ===size ? 'border-orange-500':' '}`} key={item}>{item}</button>
                  ))
                }
              </div>

            </div>
            <button onClick={()=>addToCart(productsData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
            <hr className='mt-8 text-gray-300 sm:w-4/5'/>
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1 '>
              <p>100% Original product.</p>
              <p>Cash on deliverry is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>


        </div>

      </div>
      {/* -----------description and review */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border border-r-0 border-b-0 py-3 px-5 text-sm'>Description</b>
          <p className='border border-b-0 py-3 px-5 text-sm'>Review (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500' >
                <p>An e-commerce website is an online store that facilitates the buying and selling of products, services, or digital goods over the internet.</p>
                <p>Key components include product listings, shopping cart functionality, secure payment gateways, and inventory and order management systems to provide a complete online shopping experience. </p>

        </div>
      </div>
      {/* ----------display related product -------------- */}
      <RealateProducts category={productsData.category} subCategory={productsData.subCategory} />
        
    </div>
  ): <div className='opacity-0'></div>
}

export default Product