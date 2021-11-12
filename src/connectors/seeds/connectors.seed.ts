import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';

import { ConnectorsService } from '../connectors.service';
@Injectable()
export class ConnectorsSeed {
  constructor(private readonly connectorsService: ConnectorsService) {}

  @Command({
    command: 'create:connector',
    describe: 'create connectors',
  })
  async run() {
    await this.connectorsService.add({
      name: 'Conta Azul',
      type: 'REST',
      privacy: 'PUBLIC',
      base_url: 'https://api.contaazul.com/v1',
      logo_url: 'logo1',
      category: 'category1',
      description:
        'ContaAzul é uma plataforma online de fácil manuseio e controle financeiro para pequenos negócios.',
      status: 'ACTIVE',
    });
  }
}
