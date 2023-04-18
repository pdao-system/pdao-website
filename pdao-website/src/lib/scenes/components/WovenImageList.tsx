import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function MasonryImageList() {
  return (
    <Box sx={{ maxWidth: 0.5,  }}>
      <ImageList variant="masonry" gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>

            
            <a href={item.url}>
              <div >
              <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{minWidth: "100%",
                minHeight: "100%",
                flexShrink: 0}}
            />
              </div>
            </a>

          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://media.discordapp.net/attachments/893439505988743178/1082575063049572352/wN7UnXYXCAnzQAAAABJRU5ErkJggg.png',
    title: 'Bed',
    url: ""
  },
  {
    img: 'https://media.discordapp.net/attachments/969753644029337701/1082539301314773162/logo_1.png',
    title: 'Sink',
    url: ""
  },
  {
    img: 'https://cdn.discordapp.com/attachments/1062631762204839956/1082575218066849802/Dcard_Favicon_x520.png',
    title: 'Kitchen',
    url: ""
  },
  {
    img: 'https://cdn.discordapp.com/attachments/1062631762204839956/1082575152413425664/Emblem72.png',
    title: 'Books',
    url: ""
  },
  {
    img: 'https://www.ragic.com/sims/img/ogimg_default.png',
    title: 'Ragic',
    url: 'https://www.ragic.com/intl/zh-TW/home' 
  }


];