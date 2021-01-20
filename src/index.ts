import {ShardingManager} from 'discord.js';
import path from 'path';
import config from './config'

const manager = new ShardingManager(path.join(__dirname, 'bot.ts'), config.bot.shards)

manager.on('shardCreate', (Shard) => console.log(`[Shard] Shard #${Shard.id} Create`))

manager.spawn()