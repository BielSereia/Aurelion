/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import { config } from 'dotenv';
import Client from './client/index';

config();

const client = new Client();

client.loadCommands('./src/commands/');
client.loadEvents('./src/events/');

client.login(process.env.DISCORD_TOKEN);
