
const API_KEY = 'dfb8f656f69c04d7bdd609f10f0ab8ad';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    
    return json;
}
export default  {
    getHomeList: async ()=> {
        return [
            {
                slug: 'originals',
                title: 'Originais da Netflix',
                items:  await basicFetch(`/discover/tv?with_networks=213&language=pt-br&api_key=${API_KEY}`)             
            },
            {
                slug: 'trending',
                title: 'Mais recomedados',
                items: await basicFetch(`/trending/all/week?language=pt-br&api_key=${API_KEY}`)           
            },
            {
                slug: 'top_rated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?language=pt-br&api_key=${API_KEY}`)          
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-br&api_key=${API_KEY}`)           
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-br&api_key=${API_KEY}`)            
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-br&api_key=${API_KEY}`)            
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-br&api_key=${API_KEY}`)            
            },
            {
                slug: 'western',
                title: 'Bang Bang',
                items: await basicFetch(`/discover/movie?with_genres=37&language=pt-br&api_key=${API_KEY}`)            
            },
            {
                slug: 'fantasy',
                title: 'Fantasia',
                items: await basicFetch(`/discover/movie?with_genres=14&language=pt-br&api_key=${API_KEY}`)            
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-br&api_key=${API_KEY}`)           
            },
            {
                slug: 'science fiction',
                title: 'Ficção Científica',
                items: await basicFetch(`/discover/movie?with_genres=878&language=pt-br&api_key=${API_KEY}`)           
            },
        ];
    },
    getInfoMovie: async (id, type) => {
        if(id > 0) {
            switch (type) {
                case 'movie':
                    return await basicFetch(`/movie/${id}?language=pt-br&api_key=${API_KEY}`)
                case 'tv':
                    return await basicFetch(`/tv/${id}?language=pt-br&api_key=${API_KEY}`)
                default:
                    return await {}
            }
        }
    }

}