import React from 'react'

import CustomButton from './CustomButton'

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className='aipicker-container'>
      <textarea
        placeholder='Ask AI...'
        rows={5}
        onChange={(e) => setPrompt(e.target.value)}
        className='aipicker-textarea'
      ></textarea>
      <div
        className='flex flex-wrap gap-3'
      >

        {generatingImg ? (
          <CustomButton
            type='outline'
            title='Asking AI..'
            customStyles='text-xs'
          ></CustomButton>
        ) : (
          <>
            <CustomButton
              type='outline'
              title='AI Logo'
              handleClick={() => { handleSubmit('logo') }}
              customStyles='text-xs'
            ></CustomButton>

            <CustomButton
              type='filled'
              title='AI full'
              handleClick={() => { handleSubmit('full') }}
              customStyles='text-xs'
            ></CustomButton>
          </>
        )}
      </div>
    </div>
  )
}

export default AIPicker