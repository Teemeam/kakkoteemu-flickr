const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className='w-full'>
      <div className='w-full'>
        <p className='font-montserrat font-light text-xs text-center mt-5 text-slate-400'>&copy; { year }</p>
      </div>
    </div>
  )
}

export default Footer;