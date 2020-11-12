/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */

import { Client } from 'discord.js';
import CommandStructure from '../../structures/CommandStructure/index';

export default class cor extends CommandStructure {
  client: Client;

  constructor(client: Client) {
    super(client, {
      config: {
        name: 'cor',
      },
    });
    this.client = client;
  }

  run(): void {
    this.getMessage().delete({ timeout: 3 * 1000 });
    // @ts-ignore
    if (!this.getArgs()[0]) return this.getMessage().reply('Por favor, mencione uma cor!').then((msg) => msg.delete({ timeout: 10 * 1000 }));

    const role = this.getMessage().mentions.roles.get(this.getArgs()[0]) || this.getMessage().mentions.roles.first();

    // @ts-ignore
    this.getMessage().member?.roles.add(role);
  }
}
