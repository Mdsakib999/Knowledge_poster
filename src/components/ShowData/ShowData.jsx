import React from 'react';
import './ShowData.css'

const ShowData = ({data}) => {
    return (
        <div className='parent-div'>
            <div className=' showData'>
                <div>
                    <img className='cover-img' src={data.coverImage} alt="" />
                </div>

                <div className='data-text-1'>
                    <div className='data-text-2'>
                        <div className='data-text-3'>
                            <img className='author-img' src={data.authorImg} alt="" />
                            <div className='data-text-4'>
                                <h3>{data.authorName}</h3>
                                <p>{data.publishDate}</p>
                            </div>
                        </div>
                         
                         <p>{data.readTime} 
                         <span className='icon'> <i class="fa-regular fa-bookmark"></i> </span>
                         </p>
                    </div>

                    <h2 className='title'>{data.BlogTitle}</h2>

                    <p className='mark-read'>Mark as read</p>

                </div>
            </div>

            
        </div>
    );
};

export default ShowData;