import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ConnectorsService } from './connectors.service';
import { CreateConnectorDto } from './dto/create-connector.dto';
import { UpdateConnectorDto } from './dto/update-connector.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('connectors')
export class ConnectorsController {
  constructor(private readonly connectorsService: ConnectorsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createConnectorDto: CreateConnectorDto) {
    return this.connectorsService.create(createConnectorDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.connectorsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.connectorsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateConnectorDto: UpdateConnectorDto,
  ) {
    return this.connectorsService.update(id, updateConnectorDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.connectorsService.remove(id);
  }
}
