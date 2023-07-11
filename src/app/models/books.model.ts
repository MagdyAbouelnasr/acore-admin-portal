export class Book {
  title: string;
  author: string;
  category: string;
  price: number;
  pdf: File | null;
  coverPhoto: File | null;
  version: string;
  olderVersion?: string;
  edition?: string;
  isbn: string;
  releaseDate?: Date | null;
  brief: string;

  // constructor(data: Partial<Book>) {
  //   Object.assign(this, data);
  // }
}
