import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Pricecards = () => {
  return (
    <div className='wraper'>
        <div className='price-card-cont'>
            <div style={{width:'180px',marginLeft:'auto',marginRight:'auto'}}>
            <h2>FREE</h2>
            <p style={{fontWeight:'bold',color:'grey'}}>Organize across all apps by hand</p>
            </div>
            <div className='price-wrap'>
                <h1 style={{fontSize:'36px'}}>0</h1>
                <div>
                    <p style={{fontWeight:'bold'}}>&#36;</p>
                    <p>Per Month</p>
                </div>
            </div>
            <div className='feature-list'>
                <div>
                    <CheckCircleIcon style={{fontSize:'28px',marginRight:'10px',color:'rgb(106, 255, 47)'}}/>
                    <p>Unlimited product updates</p>
                </div>
                <div>
                    <CheckCircleIcon style={{fontSize:'28px',marginRight:'10px',color:'rgb(106, 255, 47)'}}/>
                    <p>Unlimited product updates</p>
                </div>
                <div>
                    <CheckCircleIcon style={{fontSize:'28px',marginRight:'10px',color:'rgb(106, 255, 47)'}}/>
                    <p>Unlimited product updates</p>
                </div>
                <div>
                    <CheckCircleIcon style={{fontSize:'28px',marginRight:'10px',color:'grey'}}/>
                    <p>1GB Cloud Storage</p>
                </div>
                <div>
                    <CheckCircleIcon style={{fontSize:'28px',marginRight:'10px',color:'grey'}}/>
                    <p>Email and community support</p>
                </div>
                <button className='prim-btn' style={{width:'100%',marginBottom:'10px'}}>Try for free</button>
            </div>
        </div>
        <div className='price-card-cont standard-card'>
            <div style={{width:'180px',marginLeft:'auto',marginRight:'auto',marginTop:'50px'}}>
            <h2>STANDARD</h2>
            <p style={{fontWeight:'500'}}>Organize across all apps by hand</p>
            </div>
            <div className='price-wrap'>
                <h1 style={{fontSize:'36px'}}>9.99</h1>
                <div>
                    <p style={{fontWeight:'bold'}}>&#36;</p>
                    <p>Per Month</p>
                </div>
            </div>
            <div className='feature-list'>
                <div>
                    <CheckCircleIcon style={{fontSize:'28px',marginRight:'10px',color:'rgb(106, 255, 47)'}}/>
                    <p>Unlimited product updates</p>
                </div>
                <div>
                    <CheckCircleIcon style={{fontSize:'28px',marginRight:'10px',color:'rgb(106, 255, 47)'}}/>
                    <p>Unlimited product updates</p>
                </div>
                <div>
                    <CheckCircleIcon style={{fontSize:'28px',marginRight:'10px',color:'rgb(106, 255, 47)'}}/>
                    <p>Unlimited product updates</p>
                </div>
                <div>
                    <CheckCircleIcon style={{fontSize:'28px',marginRight:'10px',color:'grey'}}/>
                    <p>1GB Cloud Storage</p>
                </div>
                <div>
                    <CheckCircleIcon style={{fontSize:'28px',marginRight:'10px',color:'grey'}}/>
                    <p>Email and community support</p>
                </div>
                <button className='prim-btn' style={{width:'100%',marginBottom:'10px'}}>Try for free</button>
            </div>
        </div>
        <div className='price-card-cont'>
            <div style={{width:'180px',marginLeft:'auto',marginRight:'auto'}}>
            <h2>PREMIUM</h2>
            <p style={{fontWeight:'bold',color:'grey'}}>Organize across all apps by hand</p>
            </div>
            <div className='price-wrap'>
                <h1 style={{fontSize:'36px'}}>19.99</h1>
                <div>
                    <p style={{fontWeight:'bold'}}>&#36;</p>
                    <p>Per Month</p>
                </div>
            </div>
            <div className='feature-list'>
                <div>
                    <CheckCircleIcon style={{fontSize:'28px',marginRight:'10px',color:'rgb(106, 255, 47)'}}/>
                    <p>Unlimited product updates</p>
                </div>
                <div>
                    <CheckCircleIcon style={{fontSize:'28px',marginRight:'10px',color:'rgb(106, 255, 47)'}}/>
                    <p>Unlimited product updates</p>
                </div>
                <div>
                    <CheckCircleIcon style={{fontSize:'28px',marginRight:'10px',color:'rgb(106, 255, 47)'}}/>
                    <p>Unlimited product updates</p>
                </div>
                <div>
                    <CheckCircleIcon style={{fontSize:'28px',marginRight:'10px',color:'grey'}}/>
                    <p>1GB Cloud Storage</p>
                </div>
                <div>
                    <CheckCircleIcon style={{fontSize:'28px',marginRight:'10px',color:'grey'}}/>
                    <p>Email and community support</p>
                </div>
                <button className='prim-btn' style={{width:'100%',marginBottom:'10px'}}>Try for free</button>
            </div>
        </div>
    </div>
  )
}

export default Pricecards
