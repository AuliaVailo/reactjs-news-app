import moment from 'moment';

function NewsCard(props) {
    return (
        <div className="NewsCard">
            <div className="flex flex-col m-3 shadow-lg rounded-xl hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition duration-500 ease-in-out">
                <div className="rounded-lg relative">
                    <img src={props.data.urlToImage} className="w-full rounded-xl" alt="logo" />
                    <span className="absolute bottom-3 left-3 text-white whitespace-wrap w-2/3 text-left font-bold">
                        {props.data.title}
                    </span>
                </div>
                <div className="text-left pl-3 pt-3 text-red-500 font-bold text-xs">
                    {moment(props.data.publishedAt).format('LLLL')}
                </div>
                <div className="text-left pl-3 text-gray-800 font-bold text-xs">
                    {props.data.author}
                </div>
                <div className="text-left px-3 pt-3 text-gray-500 text-sm">
                    {props.data.description}
                </div>
                <a href={props.data.url} target="blank" className="text-right p-5 text-red-500">
                    Go to website
                </a>
            </div>
        </div>
    )
}

export default NewsCard;