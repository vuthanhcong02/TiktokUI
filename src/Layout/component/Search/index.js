import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '../../../components/GlobalStyles/Popper';
import AccountItem from '../../../components/AccountItem';
import className from 'classnames/bind';
import styles from './Search.module.scss';
import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useState, useRef } from 'react';
import { useDebouced } from '../../../hooks';
import * as searchService from '../../../apiServices/searchService';
const cx = className.bind(styles);
function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(false);
    const debouced = useDebouced(searchValue, 800);
    const inputRef = useRef();
    useEffect(() => {
        if (!debouced.trim()) {
            setSearchResult([]);
            return;
        }
        const fetchApi = async () => {
            const result = await searchService.search(debouced);
            setSearchResult(result);
        };
        fetchApi();
    }, [debouced]);
    const handleLClearInput = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResult([]);
    };
    const handleOutSide = () => {
        setShowResult(false);
    };
    const handleChangeResult = (e) => {
        const searchResult = e.target.value;
        if (searchResult.startsWith(' ')) {
            return;
        }
        setSearchValue(searchResult);
    };
    return (
        <div>
            <HeadlessTippy
                interactive={true}
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-box')} tabIndex={-1} {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>

                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleOutSide}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Searchs account and videos"
                        onChange={handleChangeResult}
                        onFocus={() => {
                            setShowResult(true);
                        }}
                    />
                    {!!searchValue && (
                        <button className={cx('close-btn')} onClick={handleLClearInput}>
                            <FontAwesomeIcon icon={faXmarkCircle} />
                        </button>
                    )}
                    <span></span>
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
