import { ShopLayout } from "@/components/layouts"
import { ProductSlideshow, SizeSelector } from "@/components/products";
import { ItemCounter } from "@/components/ui";
import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { initialData } from '../../database/products';

const product = initialData.products[0];

const ProductPage = () => {
    return (
        <ShopLayout title={""} pageDescription={""}>

            <Grid container spacing ={ 3 }>

                <Grid item xs={ 12 } sm={ 7 }>
                    <ProductSlideshow images={ product.images } />
                </Grid>

                <Grid item xs={ 12 } sm={ 5 }>
                    <Box display='flex' flexDirection='column'>

                        { /* Titulos */ }
                        <Typography variant='h1' component='h1'>{ product.title }</Typography>
                        <Typography variant='subtitle1' component='h2'>{` $${ product.price } `}</Typography>

                        { /* Titulos */ }
                        <Box sx={{ my: 2 }}>
                            <Typography variant='subtitle2'>Cantidad</Typography>
                            <ItemCounter />
                            <SizeSelector 
                                // selectedSize={ product.sizes[0] } 
                                sizes={ product.sizes }                                
                            />
                        </Box>

                        { /* Agregar al carrito */ }
                        <Button color='secondary' className='circular-btn'>
                            Agregar al carrito
                        </Button>

                        {/* <Chip label='No hay disponibilidad' color='error' variant='outlined' /> */}

                        {/* Descripcion */}
                        <Box sx={{ mt: 3 }}>
                            <Typography variant='subtitle2'>Descripción</Typography>
                            <Typography variant='body2'>{ product.description }</Typography>
                        </Box>
                        
                    </Box>
                </Grid>

            </Grid>
            
        </ShopLayout>
    )
}

export default ProductPage
