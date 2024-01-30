import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';


 


const Sample1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const now = new Date();
    const targetOpenTime = new Date(now);
    targetOpenTime.setHours(16, 37, 15); // 5 pm

    const targetCloseTime = new Date(now);
    targetCloseTime.setHours(16, 38, 1); // 6 pm

    const openTimer = setTimeout(() => {
      setIsModalOpen(true);
    }, targetOpenTime - now);

    const closeTimer = setTimeout(() => {
      setIsModalOpen(false);
    }, targetCloseTime - now);

    // Clean up timers when the component unmounts
    return () => {
      clearTimeout(openTimer);
      clearTimeout(closeTimer);
    };
  }, []);

  
  return (
   <>
     <div>
      {/* Content of your main component */}
      <h1>Welcome to My App!</h1>

      {/* Modal component */}
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}> 
        <h2>Timed Dialog</h2>
        <label>firstname</label>
       <input type='text'/>
        <label>Do you want rice</label>
       <input type='text'/>
      </Modal>
    </div>
   </>
  )
}

export default Sample1