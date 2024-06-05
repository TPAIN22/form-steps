import Done from '../assets/images/icon-thank-you.svg'
function Thanks() {
    return(  
             
             <div className='flex flex-col gap-8 justify-center items-center max-w-96'>
                 <img src={Done} alt="" />
                 <h1 className='text-[var(--blue-prime)] text-4xl font-bold'>Thank you!</h1>
                 <p className='text-[var(--Cool-gray)] text-center text-sm'>Thanks for confirming your subscription! We hope you have fun using our platform.
                     If you ever need support, please feel free to email us at support@loremgaming.com.</p>
             </div>
         )
 }
 export default Thanks
 