import React, { useContext, useState } from 'react';
import './Home.css';
import data_png from './data.png'
import StoreProvider, { Store } from '../Store/Store';

const Home = () => {

  
  const {menu} = useContext(Store);

  return (
    <div className='my-details'>
      <h1 className={menu==='About'?'active':''}>About me</h1>
      <div className='myself'>
        <p>👋 Hi there! I'm Sasidhar Purum, a passionate Data Engineer with a fresh perspective and a drive to make an impact. 🚀</p>
        <p>🧰 My toolkit includes Python programming, SQL, and a solid foundation in Azure Data Engineering. With Microsoft Certified Azure Data Engineer Associate and Azure Fundamentals under my belt, I'm eager to embark on a dynamic journey in the world of Data Engineering. My commitment to delivering top-notch results is unwavering, and I'm hungry to learn and grow every step of the way.</p>
        <p>🎓 I recently completed my Master of Computer Application (MCA) from Sri Venkateshwara University and hold a Bachelor of Science (BSc) degree from Shri Gnanambica Degree College. 📚</p>
        <p>💡 Armed with hands-on experience in building real-world data pipelines, I'm thrilled about my project achievements, such as architecting a COVID-19 Data Pipeline using Azure Data Factory and Databricks. 🌐 Additionally, I designed and developed a podcasts pipeline using Apache Airflow, showcasing my knack for transforming concepts into practical solutions.</p>
        <h3>I'am good at</h3>
      </div>
        <div className='cards'>
          <div className='card1'>
            <div><img src={data_png}/></div>
            <div>              
              <h5>Data-Engineer</h5>
              <p>Azure Data Engineering empowers organizations to harness the power of their data by providing a comprehensive suite of tools and services.</p>
            </div>
          </div>
          <div className='card2'>
            <div><img src={data_png}/></div>
            <div>              
              <h5>SQL</h5>
              <p>Azure Data Engineering empowers organizations to harness the power of their data by providing a comprehensive suite of tools and services.</p>
            </div>
          </div>
          <div className='card3'>
            <div><img src={data_png}/></div>
            <div>              
              <h5>Python</h5>
              <p>Azure Data Engineering empowers organizations to harness the power of their data by providing a comprehensive suite of tools and services.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home;
