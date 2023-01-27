import React from 'react'

const Reports = () => {
  const submitHandler = (e, type) => {
    e.preventDefault()
  }

  return (
    <div>
      <div className="md:flex justify-center gap-14 text-gray-500 mb-10">
        <p className="cursor-pointer select-none">Nouveau rapport</p>
      </div>
    </div>
  )
}

export default Reports
