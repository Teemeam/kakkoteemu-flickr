import { tags } from '../../lib/tags.js';

const Header = () => {
  const options = tags.map((tag) => {
    return (
      <option className='font-montserrat font-light text-sm' value={ tag.value }>{ tag.label }</option>
    );
  });

  return (
    <div className='w-full'>
      <div className='sm:w-auto w-11/12 sm:mx-10 mx-auto'>
        <h1 className='font-montserrat font-black text-lg my-5'>Teemu Kakko Film Photo Showcase</h1>
        <div className='my-5'>
          <label htmlFor='select-tags' className='block font-montserrat font-light text-base mb-5'>Select tags</label>
          <select multiple id='select-tags' className='form-multiselect h-20 sm:w-400px w-11/12 rounded'>
            { options }
          </select>
        </div>
      </div>
    </div>
  )
}

export default Header;