import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import type { FormEvent } from "react";

function SearchForm({ className = "" }: { className?: string }) {

    function buscarProdutos(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        alert('Em desenvolvimento!');
    }

    return (
        <form 
            className={`flex items-center justify-center w-full ${className}`}
            onSubmit={buscarProdutos}
        >
            <input 
                className="w-10/12 px-4 py-4 text-black bg-white rounded-lg h-9 focus:outline-none"
                type="search"
                placeholder="Pesquisar produto"
                id="busca"
                name="busca"
            />
            <button 
                type="submit" 
                className="ms-2 h-9 w-9 rounded-lg border border-teal-700 bg-teal-500 p-2.5 text-sm font-medium text-white hover:bg-teal-900"
            >
                <MagnifyingGlassIcon size={14} weight="bold"/>
            </button>
        </form>
    );
}

export default SearchForm