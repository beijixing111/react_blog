import * as Cache from '../utils/cache';
import Router from 'next/router';

const Level = () => {
  let levelData = JSON.parse(Cache.getCookie('token'));
  if (!levelData) {
    return Router.push({
      pathname: '/login'
    });
  } 
  return levelData;
}

export default Level;