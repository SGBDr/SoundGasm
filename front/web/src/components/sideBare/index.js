import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../../utils';
import {Link} from 'gatsby';

export const SideBar = (props) => {

    const handleDisconnect = () => {
        localStorage.removeItem('authToken');
        props.setAuthToken(undefined);
    }

    return(
        <Wrapper>
            <ContentWrapper>
                <Link  to="/" title='Home'> <Img className='icon' alt="kk" src="/images/icons/home2.svg" /> </Link>
                <Link  to="/liked" title='Liked'> <Img className='icon' alt="kk" src="/images/icons/heart.svg" /> </Link>
                <Link  to="/album" title='Album'> <Img className='icon' alt="kk" src="/images/icons/album.svg" /> </Link>
                <Link  to="/playlist" title='Playlist'> <Img className='icon' alt="kk" src="/images/icons/playlist.svg" /> </Link>
                <Link  to="#" title='Logout' onClick={handleDisconnect}> <Img className='icon' alt="kk" src="/images/icons/profil.svg" /> </Link>
                
            </ContentWrapper>

        </Wrapper>
    );

}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    left: 20px;
    top: 96px;

    width: 52px;
    height: 300px;
    border-radius: 32px;

    
    background-color: ${COLOR.darkAlt};
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    
    height: 250px;

    .icon: hover {
        fill: #DA4567;
        left: 30;
    }
`;

const Img = styled.img`
    transition: 0.2s ease-in-out;
    :hover{
        transform: scale(2);
    }
`
