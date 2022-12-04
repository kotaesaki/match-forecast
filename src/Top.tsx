import { jsx } from 'hono/jsx'
import { Layout } from './Layout'
import { matchs } from './models/match'

export const Top = () => {
  const getDate = (date: Date): string => {
    return `${date.getMonth() + 1}月${date.getDate()}日 ${date.getHours()}時`;
  }
  return (
    <Layout>
      <h1>試合予想ドットコム</h1>
      <p>試合結果を予想してシェアしよう！</p>
      {matchs.map((match) => (
        <a href={`/forecasts/${match.id}`}>
        <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; background-color: #0353A4; color: white; border-radius: 1rem; min-height: 400px; text-align: center; font-size: 1.5rem; margin-bottom: 5rem;">
          <div style="width: 15rem; float: left; vertical-align: middle;">
            <img src={match.team[0].image} alt="国旗" />
            <div>{match.team[0].name}</div>
          </div>
          <div style="float: left;">
            <span>vs</span>
            <br/>
            <span style="font-size: 1rem">{getDate(match.date)}</span>
          </div>
          <div style="width: 15rem; float: left;">
            <img src={match.team[1].image} alt="国旗" />
            <div>{match.team[1].name}</div>
          </div>
        </div>
        </a>
      ))}
    </Layout>
  )
}