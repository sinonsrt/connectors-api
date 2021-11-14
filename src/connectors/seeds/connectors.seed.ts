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
    await this.connectorsService.add([
      {
        name: 'Madeira Madeira',
        description:
          'Nosso objetivo é integra-lo conosco. Queremos crescer juntos, pois juntos somos mais fortes e faremos tudo pelo preço ;)',
        logo_url:
          'https://devapi.com.br/static/images/connectors/madeira-madeira.png',
        base_url: 'https://marketplace.madeiramadeira.com.br/v1',
        category: 'Marketplaces',
        type: 'REST',
        privacy: 'PUBLIC',
        status: 'ACTIVE',
        deleted_at: null,
      },
      {
        name: 'VTEX',
        description:
          'Plataforma de E-commerce focada em trazer para o cliente uma elevada experiência de compra através de um comércio unificado.',
        logo_url:
          'https://agenciam3.com/wp-content/uploads/2019/09/100-1024x536.jpg',
        base_url: ' https://{accountName}.{enviroment}.com.br/api',
        category: 'E-commerce',
        type: 'REST',
        privacy: 'PUBLIC',
        status: 'ACTIVE',
        deleted_at: null,
      },
      {
        name: 'Conta Azul',
        description:
          'ContaAzul é uma plataforma online de fácil manuseio e controle financeiro para pequenos negócios.',
        logo_url:
          'https://devapi.com.br/static/images/connectors/conta-azul.png',
        base_url: 'https://api.contaazul.com/v1',
        category: 'ERP',
        type: 'REST',
        privacy: 'PUBLIC',
        status: 'ACTIVE',
        deleted_at: null,
      },
      {
        name: 'AnyMarket',
        description:
          'O hub de integração marketplaces que amplia as vendas do seu ecommerce com total segurança e estabilidade.',
        logo_url:
          'https://devapi.com.br/static/images/connectors/anymarket.png',
        base_url: 'https://api.anymarket.com.br/v2',
        category: 'HUB',
        type: 'REST',
        privacy: 'PUBLIC',
        status: 'ACTIVE',
        deleted_at: null,
      },
      {
        name: 'Trello',
        description:
          'O Trello é uma ferramenta de colaboração que organiza seus projetos em painéis. À primeira vista, saiba o que está sendo trabalhado, quem está trabalhando no quê e onde algo está em processo.',
        logo_url: 'https://devapi.com.br/static/images/connectors/trello.png',
        base_url: 'https://api.trello.com/1',
        category: {
          id: '606212ea3f2727a3f876dc0d',
          name: 'Produtividade',
        },
        type: 'REST',
        privacy: 'PRIVATE',
        status: 'ACTIVE',
        deleted_at: null,
      },
      {
        name: 'Cielo Ecommerce',
        description:
          'A solução de pagamento digital fácil de integrar. Conecte seu e-commerce à solução de pagamento pronta da Cielo. É conectar e sair vendendo online.',
        logo_url:
          'https://www.cielo.com.br/assets/images/assets_cielo/logo_footer.svg',
        base_url: 'https://api.cieloecommerce.cielo.com.br/1',
        category: 'Gateways de pagamento',
        type: 'REST',
        privacy: 'PUBLIC',
        status: 'ACTIVE',
        deleted_at: null,
      },
      {
        name: 'PicPay',
        description: 'PicPay faz com que seus pagamentos sejam mais simples.',
        logo_url: 'https://devapi.com.br/static/images/connectors/picpay.png',
        base_url: 'https://appws.picpay.com/ecommerce/public',
        category: 'Gateways de pagamento',
        type: 'REST',
        privacy: 'PUBLIC',
        status: 'ACTIVE',
        deleted_at: null,
      },
    ]);
  }
}
