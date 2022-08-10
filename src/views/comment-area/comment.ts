export interface comment {
  id: string;
  author: string;
  comment: string;
  time: Date;
  // 1: 点赞 0：无态度 -1:踩
  attitude: number;
}
