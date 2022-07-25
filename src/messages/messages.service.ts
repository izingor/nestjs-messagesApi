import { MessagesRepositoy } from './messages.repository';

export class MessagesService {
  messagesRepo: MessagesRepositoy;

  constructor() {
    //Service is creating itw own dependencies
    // DON'T DO IT ON REAL APP- doing it in order to understand dependecy injection
    this.messagesRepo = new MessagesRepositoy();
  }

  async findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  async findAll() {
    return this.messagesRepo.findAll();
  }

  async create(content: string) {
    return this.messagesRepo.create(content);
  }
}
