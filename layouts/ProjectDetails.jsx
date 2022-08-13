import {
  Typography,
  Box,
  CardMedia,
  Card,
  List,
  ListItem,
  Button,
} from '@mui/material';

const ProjectDetails = ({ project }) => {
  const mapUrlsToCard = (project) =>
    project.attributes.img_urls.map((img, i) => (
      <Card
        sx={{
          width: { xs: '313px', md: '635px' },
          height: { xs: '197px', md: '400px' },
        }}
        key={i}
      >
        <CardMedia component='img' src={img} width='100%' height='100%' />
      </Card>
    ));

  return (
    <Box
      sx={{
        display: { xs: 'flex', md: 'grid' },
        gridTemplateColumns: 'repeat(4,1fr)',
        gridTemplateRows: 'repeat(6,1fr)',
        gridTemplateAreas: `"hero hero hero hero"
        "hero hero hero hero"
        "left-side left-side right-side right-side"
        "left-side left-side right-side right-side"
        "left-side left-side right-side right-side"
        "left-side left-side right-side right-side"
        `,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '40px',
        height: 'auto',
      }}
    >
      <Box
        sx={{
          gridArea: 'hero',
          width: { xs: '311px', md: '100%' },
          height: { xs: '140px', md: '100%' },
          backgroundImage: 'url(/hero-home.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
      <Box
        sx={{
          gridArea: 'left-side',
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: { xs: '311px', md: '100%' },
            height: { xs: '400px', md: '30%' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginTop: { xs: '65px', md: '135px' },
            paddingLeft: { xs: '0', md: '15px' },
            paddingRight: { xs: '0', md: '15px' },
          }}
        >
          <Typography variant='h3'>Manage</Typography>
          <Typography variant='body1'>
            This project required me to build a fully responsive landing page to
            the designs provided. I used HTML5, along with CSS Grid and
            JavaScript for the areas that required interactivity, such as the
            testimonial slider.
          </Typography>
          <List>
            <ListItem>Interaction Design / Front End Development</ListItem>
            <ListItem>HTML/CSS/JS</ListItem>
          </List>
          <Box>
            <Button sx={{ width: '178px', height: '48px' }} variant='outlined'>
              VISIT WEBSITE
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ gridArea: 'right-side', marginTop: '115px' }}>
        <Box
          sx={{
            width: { xs: '311px', md: '100%' },
            height: { xs: '400px', md: 'auto' },
          }}
        >
          <Typography variant='h4' sx={{ paddingBottom: '28px' }}>
            Project Background
          </Typography>
          <Typography variant='body1'>{project.attributes.details}</Typography>
        </Box>

        <Box sx={{ marginTop: { xs: '0', md: '30px' } }}>
          <Typography variant='h4' sx={{ paddingBottom: '40px' }}>
            Static Previews
          </Typography>
          <Box
            sx={{
              width: { xs: '313px', md: '100%' },
              height: { xs: '426px', md: '850px' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {mapUrlsToCard(project)}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectDetails;
