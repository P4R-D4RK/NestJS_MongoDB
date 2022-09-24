import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';

@Controller('product')
export class ProductController {

    @Post('/create')
    createPost(@Res() res, @Body() createProductDTO: CreateProductDTO) {
        //console.log(createProductDTO);
        return res.status(HttpStatus.OK).json({
            message: 'received'
        });
    }


}
