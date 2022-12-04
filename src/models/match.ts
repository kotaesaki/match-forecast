type TMatch = {
  id: number,
  date: Date,
  team: {
    name: string,
    image: string
  }[]
}

export const matchs: TMatch[] = [
  {
    id: 1,
    date: new Date('December 5, 2022 00:00:00'),
    team: [
      {
        name: "フランス",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg"
      },
      {
        name: "ポーランド",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/260px-Flag_of_Poland.svg.png"
      }
    ],
  },
  {
    id: 2,
    date: new Date('December 5, 2022 04:00:00'),
    team: [
      {
        name: "イングランド",
        image: "https://dic.nicovideo.jp/oekaki/14861.png"
      },
      {
        name: "セネガル",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/800px-Flag_of_Senegal.svg.png"
      }
    ],
  },
  {
    id: 3,
    date: new Date('December 6, 2022 00:00:00'),
    team: [
      {
        name: "日本",
        image: "https://dic.nicovideo.jp/oekaki/34322.png"
      },
      {
        name: "クロアチア",
        image: "https://www.abysse.co.jp/flags/wp-content/uploads/2019/08/hr.png"
      }
    ],
  },
  {
    id: 4,
    date: new Date('December 6, 2022 04:00:00'),
    team: [
      {
        name: "ブラジル",
        image: "https://weblio.hs.llnwd.net/e7/img/dict/sgkdj/images/102372.jpg"
      },
      {
        name: "韓国",
        image: "https://i0.wp.com/iinenihongo.com/wp-content/uploads/2016/06/kankoku.jpg?fit=800%2C529&ssl=1"
      }
    ],
  }
]