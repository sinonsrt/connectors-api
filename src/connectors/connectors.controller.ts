import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { ConnectorsService } from './connectors.service';
import { CreateConnectorDto } from './dto/create-connector.dto';
import { UpdateConnectorDto } from './dto/update-connector.dto';
// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('connectors')
export class ConnectorsController {
  constructor(private readonly connectorsService: ConnectorsService) {}

  // @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createConnectorDto: CreateConnectorDto) {
    return this.connectorsService.create(createConnectorDto);
  }

  // @UseGuards(JwtAuthGuard)
  @Get()
  findAll(
    @Query('name') name: string,
    @Query('category') category: string,
    @Query('type') type: string,
    @Query('privacy') privacy: string,
  ) {
    const connectors = this.connectorsService.findAll();
    if (name) connectors.where('name', name);
    if (category) connectors.where('category', category);
    if (type) connectors.where('type', type);
    if (privacy) connectors.where('privacy', privacy);
    return connectors;
  }

  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.connectorsService.findOne(id);
  }

  // @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateConnectorDto: UpdateConnectorDto,
  ) {
    return this.connectorsService.update(id, updateConnectorDto);
  }

  // @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.connectorsService.remove(id);
  }
}
