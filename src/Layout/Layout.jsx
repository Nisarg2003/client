import React from 'react';

const Layout = () => {
    
    const backgroundImage = "https://s3-alpha-sig.figma.com/img/bac7/908d/5586b48e1c158f42af9fb4b0f5b1c3e2?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KENQgIBPrqLfYSkmv3Ql5nwJR9TZ4As51oJ1VJ64UXhCDWbzKF7gHMxWudbUoKgioq8Tp-IxBoTyj5pUQKRyydtLUYu7k3JsEcGbCik1HJMncdDyUpiTdUlB-GSPvwkN3Fzd9QGRicoLV87PVCIorVmXJSuPdT9SocEg8zKXk-sTev7J1tisV9f3lGpzIBpra9mH98zcAAbMZSrzhx09SrswFZ-ZpXA~yQq8YM~7W6e7rsYhyIAjbVgY3KxQdLHnA0MmAH72y3-HKk7Xwy7NndQe3Rdyb5wbBDLygT6day8jzbp9jcMPCiwAZO5hMd-A9in-WQR~jtEsoUxeeG1QqQ__";

    const innerImage = "https://s3-alpha-sig.figma.com/img/727a/92e5/b27c5c3c589ffa6708563860edcef108?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CXsJddy-3Nj6u0uqOgv2iQ7OisuXcgzGR7lyK3rn1kIxuYw57nWAKYygGqoSvOtPgqjB7T-bFgZ-9VpbIqDtpjb6v00xnF8yD5CkWogSEPTKPK9CkcNcsSkZP6L962nb0etFcXalFVOU5i6FVZDQkupT6oBqApg9vA-ECJaGq6lCalVpyu7MfhQvJ~rjbAimgRr5SyUzW-stWi2oCaVFUsfg1PHsgD8CAAZkx-3i1TUCMfAf4CmTBVzk4boIW-jsIM5PFnd0niGEycHu5p1ooNGVULa3RfsUebBn9MGir-OGwSejL~q5L1nEviNj7onpPFmVVvXT3MyYEtJWOlVbLw__"; // Replace with your inner image URL
    const imageLogoImage = "https://s3-alpha-sig.figma.com/img/95ba/3481/3ad994db5b5e421121cc1ef38e21523e?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DT7LoXockAWf5-7MafqzBO6U5Z79HxJPBOneR3SfSW6lEeg-CyRmVS16BYjuM24HIVXuseqYpz3LJMFGvBEac~Mp6nzCv16HfwUoT32zTd-xpKnusPRxhYDEdgQlXpBgAHvzHVR8YiIXrcrYAEwUCFsHOou2w3sGIuqb8lLJ1W5gBF3fC~Fa03h7lO9d6EQBVhSxkSToQHuNJ3FVfP-UyFUvz-6E4zVt4Lb5KwdnbqKhHxOStQokD3VxBqaERnhKcz5Y0peKKCEE3-K1-04PFaSqqgBTzuyHUfhIFcIw7P1rXwJTsMvLbJpRmo4yUZThsOAkATvopi3EMLsy~ZTicA__"
    
    const containerStyle = {
        width: '541px',
        height: '1024px',
        backgroundSize: 'cover',
        backgroundImage: `url(${backgroundImage})`,
        position: 'relative',
        
    };
    
    const innerImageStyle = {
        width: '270px',
        transform: 'scale(1.5)',
        height: '385px',
        backgroundSize: 'cover',
        position: 'absolute',
        top: '236px',
        left: '130px',
    };
    const imageLogo = {
        backgroundImage: `url(${imageLogoImage})`,
        width: '98px',
        height: '98px',
        top: '73px',
        position: 'fixed',
        left: '631px',
        backgroundSize: 'cover',
    };
    const textStyle = {

        position: 'absolute',
        fontFamily: 'Poppins',
        width: '342px',
        height: '48px',
        top: '675px',
        left: '125px',
        color: '#FFFFFF',
        fontSize: '32px',
        fontWeight: '600px'
    };
    const textStyle2 = {

        position: 'absolute',
        fontFamily: 'Poppins',
        width: '167px',
        height: '36px',
        top: '753px',
        left: '187px',
        color: '#FFFFFF',
        fontSize: '24px',
        fontWeight: '600px'
    };

    const greenTextStyle = {
        color: '#00D347', 
    };

    return (
        <>
        <div  className='w-[1024px] h-[100%]'>
                
        <div style={{ height: '100%' }}>

            <img style={containerStyle} src={backgroundImage}></img>
            </div>
            
            <div >
                <img style={innerImageStyle} src={innerImage}></img>
            </div>

            <div style={textStyle}>
                Feel <span style={greenTextStyle}>Safe</span> Everywhere
            </div>
            <div style={textStyle2}>
                #Safe-<span style={greenTextStyle}>T</span>-Fast
            </div>
            
        </div>
        </>
    );
};

export default Layout;
