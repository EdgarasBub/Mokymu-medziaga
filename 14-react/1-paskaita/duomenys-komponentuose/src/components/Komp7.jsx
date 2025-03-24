const Kompt7 = () => {
    let antraste = 'objektu masyvas';

    let links = [
        {id:1, url: '/', title:'Pradzia'},
        {id:2, url: 'https://www.delfi.lt', title:'Delfi'},
        {id:3, url: 'https://www.15min.lt', title:'15 min'},
        {id:4, url: 'https://www.NBA.com', title:'NBA'},
    ];

    return (
        <div>
            <h2>{antraste}</h2>
            {
                links.map(link => <li key={link.id}><a href={link.url}>{link.title}</a></li>)
            }
        </div>
    );
}

export default Kompt7;