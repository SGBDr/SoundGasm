import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../../utils';
import {Link} from 'gatsby';

export const SideBar = () => {


    return(
        <Wrapper>
            <ContentWrapper>
                <Link  to="/"> <img className='icon' alt="kk" src="/images/icons/home2.svg" /> </Link>
                <Link  to="/liked"> <img className='icon' alt="kk" src="/images/icons/heart.svg" /> </Link>
                <Link  to="/album"> <img className='icon' alt="kk" src="/images/icons/album.svg" /> </Link>
                <Link  to="/playlist"> <img className='icon' alt="kk" src="/images/icons/playlist.svg" /> </Link>
                <Link  to="/login"> <img className='icon' alt="kk" src="/images/icons/profil.svg" /> </Link>
                
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

const IconNavigation = styled(Link)`
    color: 'white';
    .home {
        backgroung: url("/images/icons/home2.svg");
        width: 20px;
        height: 20px;
    }
`
