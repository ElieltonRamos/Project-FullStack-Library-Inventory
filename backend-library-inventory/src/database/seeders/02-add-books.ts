import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('books', [
      {
        title: '1984',
        description: 'A dystopian novel by George Orwell.',
        image: 'https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/640db5c1a93664001d8e2953.jpg',
        status: 'available',
      },
      {
        title: 'To Kill a Mockingbird',
        description: 'A novel by Harper Lee about racism and injustice.',
        image: 'https://cdn.kobo.com/book-images/87c87c02-1a4f-4e3a-8e90-14135d3c7029/1200/1200/False/to-kill-a-mockingbird-graphic-novel-1.jpg',
        status: 'available',
      },
      {
        title: 'The Great Gatsby',
        description: 'A novel by F. Scott Fitzgerald about the American dream.',
        image: 'https://cdn.kobo.com/book-images/2411acbb-9daa-43fb-a5a2-a9aec064e17e/1200/1200/False/the-great-gatsby-238.jpg',
        status: 'available',
      },
      {
        title: 'Pride and Prejudice',
        description: 'A novel by Jane Austen about English society.',
        image: 'https://cdn.kobo.com/book-images/afcd8653-3b27-4423-bee9-570fb1441aed/353/569/90/False/pride-and-prejudice-71.jpg',
        status: 'available',
      },
      {
        title: 'The Catcher in the Rye',
        description: 'A novel by J.D. Salinger about adolescence and alienation.',
        image: 'https://m.media-amazon.com/images/I/8125BDk3l9L._AC_UF1000,1000_QL80_.jpg',
        status: 'available',
      },
      {
        title: 'Moby-Dick',
        description: 'A novel by Herman Melville about obsession and revenge.',
        image: 'https://m.media-amazon.com/images/I/610tcBRMh8L._AC_UF894,1000_QL80_.jpg',
        status: 'available',
      },
      {
        title: 'War and Peace',
        description: 'A novel by Leo Tolstoy about Russian history.',
        image: 'https://m.media-amazon.com/images/I/81hvMM6xKNL._AC_UF894,1000_QL80_.jpg',
        status: 'available',
      },
      {
        title: 'The Odyssey',
        description: 'An epic by Homer about the journey of Odysseus.',
        image: 'https://m.media-amazon.com/images/I/A1JR2oK-orL._AC_UF1000,1000_QL80_.jpg',
        status: 'available',
      },
      {
        title: 'Crime and Punishment',
        description: 'A novel by Fyodor Dostoevsky about morality and guilt.',
        image: 'https://m.media-amazon.com/images/I/81EcXiV-9WL._AC_UF1000,1000_QL80_.jpg',
        status: 'available',
      },
      {
        title: 'A Moreninha',
        description: 'A Moreninha é um romance de autoria do escritor brasileiro Joaquim Manuel de Macedo, publicado em 1844. A obra marca o início da ficção do romantismo brasileiro e tem grande sucesso ainda nos dias de hoje.',
        image: 'https://cdn.record.com.br/wp-content/uploads/2019/07/26024720/2986.jpeg',
        status: 'available',
      },
    ],
      {}
    )
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('books', {});
  },
};