import "@/components/search-input/searchInput.css"

export const SearchInput = ( props ) => {

    return (
        <div className="search__movie__container">
           <input className="search__input__movie" type="search" placeholder= {props.placeholder}/>
        </div>
    )
}