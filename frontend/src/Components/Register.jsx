import React, { useState } from 'react'
import { AiFillQuestionCircle, AiOutlineClose } from 'react-icons/ai';

function Register({ createAccount, setCreateAccount }) {

    const [gender, setGender] = useState("")

    const SelectGender = (e) => {
        setGender(e.target.value);
    }
    console.log(gender)

    return (
        <div className={`${createAccount ? " visible" : " hidden"} absolute w-full h-full top-0 left-0 flex justify-center bg-white bg-opacity-70 `}>
            <div className=' bg-white h-[500px] w-[430px] shadow-lg shadow-gray-300 rounded-lg mt-32'>
                <div className=' flex justify-between p-3'>
                    <div>
                        <h2 className=' text-3xl font-bold'>Sign Up</h2>
                        <p className=' text-gray-500 text-sm mt-1'>It is quick and easy</p>
                    </div>
                    <AiOutlineClose onClick={() => { setCreateAccount(false) }} className=' font-extrabold text-gray-500 text-2xl cursor-pointer' />
                </div>
                <hr />
                <div className=' p-3 w-full'>
                    <div className=' flex justify-between w-full my-1'>
                        <div className='w-[48%]'>
                            <input type="text" className=' w-full py-2 border border-gray-300 bg-gray-100 px-2 focus:outline-0 rounded placeholder:text-gray-500' placeholder='First name' />
                        </div>
                        <div className='w-[48%]'>
                            <input type="text" className=' w-full py-2 border border-gray-300 bg-gray-100 px-2 focus:outline-0 rounded placeholder:text-gray-500' placeholder='Sure name' />
                        </div>
                    </div>
                    <div className=' w-full my-2 '>
                        <input type="text" className=' w-full py-2 border border-gray-300 bg-gray-100 px-2 focus:outline-0 rounded placeholder:text-gray-500' placeholder='Mobile number or email address' />
                    </div>
                    <div className=' w-full my-2 '>
                        <input type="text" className=' w-full py-2 border border-gray-300 bg-gray-100 px-2 focus:outline-0 rounded placeholder:text-gray-500' placeholder='New password' />
                    </div>
                    <div className=' w-full my-2 flex items-center'>
                        <span className=' text-black text-xs'>Death of birth</span>
                        <AiFillQuestionCircle className=' text-gray-500 ml-1 text-sm' />
                    </div>
                    <div className=' flex items-center justify-between'>
                        <div className=' w-[32%]'>
                            <select aria-label="Day" name="birthday_Day" id="Day" title="Day" className=' w-full border border-gray-300 focus:outline-0 rounded py-1'>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                                <option value={10}>10</option>
                                <option value={11}>11</option>
                                <option value={12}>12</option>
                                <option value={13}>13</option>
                                <option value={14}>14</option>
                                <option value={15}>15</option>
                                <option value={16}>16</option>
                                <option value={17}>17</option>
                                <option value={18}>18</option>
                                <option value={19}>19</option>
                                <option value={20}>20</option>
                                <option value={21}>21</option>
                                <option value={22}>22</option>
                                <option value={23}>23</option>
                                <option value={24}>24</option>
                                <option value={25}>25</option>
                                <option value={26}>26</option>
                                <option value={27}>27</option>
                                <option value={28}>28</option>
                                <option value={29}>29</option>
                                <option value={30}>30</option>
                                <option value={31}>31</option>
                            </select>
                        </div>
                        <div className=' w-[32%]'>
                            <select aria-label="Month" name="birthday_Month" id="Month" title="Month" className='w-full border border-gray-300 focus:outline-0 rounded py-1'>
                                <option value={1}>Jan</option>
                                <option value={2}>Feb</option>
                                <option value={3}>Mar</option>
                                <option value={4}>Apr</option>
                                <option value={5}>May</option>
                                <option value={6}>Jun</option>
                                <option value={7}>Jul</option>
                                <option value={8}>Aug</option>
                                <option value={9}>Sep</option>
                                <option value={10}>Oct</option>
                                <option value={11}>Nov</option>
                                <option value={12}>Dec</option>
                            </select>
                        </div>
                        <div className=' w-[32%]'>
                            <select aria-label="Year" name="birthday_year" id="year" title="Year" className='w-full border border-gray-300 focus:outline-0 rounded py-1'>
                                <option value="2022" selected="1">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                                <option value="2014">2014</option>
                                <option value="2013">2013</option>
                                <option value="2012">2012</option>
                                <option value="2011">2011</option>
                                <option value="2010">2010</option>
                                <option value="2009">2009</option>
                                <option value="2008">2008</option>
                                <option value="2007">2007</option>
                                <option value="2006">2006</option>
                                <option value="2005">2005</option>
                                <option value="2004">2004</option>
                                <option value="2003">2003</option>
                                <option value="2002">2002</option>
                                <option value="2001">2001</option>
                                <option value="2000">2000</option>
                                <option value="1999">1999</option>
                                <option value="1998">1998</option>
                                <option value="1997">1997</option>
                                <option value="1996">1996</option>
                                <option value="1995">1995</option>
                                <option value="1994">1994</option>
                                <option value="1993">1993</option>
                                <option value="1992">1992</option>
                                <option value="1991">1991</option>
                                <option value="1990">1990</option>
                                <option value="1989">1989</option>
                                <option value="1988">1988</option>
                                <option value="1987">1987</option>
                                <option value="1986">1986</option>
                                <option value="1985">1985</option>
                                <option value="1984">1984</option>
                                <option value="1983">1983</option>
                                <option value="1982">1982</option>
                                <option value="1981">1981</option>
                                <option value="1980">1980</option>
                                <option value="1979">1979</option>
                                <option value="1978">1978</option>
                                <option value="1977">1977</option>
                                <option value="1976">1976</option>
                                <option value="1975">1975</option>
                                <option value="1974">1974</option>
                                <option value="1973">1973</option>
                                <option value="1972">1972</option>
                                <option value="1971">1971</option>
                                <option value="1970">1970</option>
                                <option value="1969">1969</option>
                                <option value="1968">1968</option>
                                <option value="1967">1967</option>
                                <option value="1966">1966</option>
                                <option value="1965">1965</option>
                                <option value="1964">1964</option>
                                <option value="1963">1963</option>
                                <option value="1962">1962</option>
                                <option value="1961">1961</option>
                                <option value="1960">1960</option>
                                <option value="1959">1959</option>
                                <option value="1958">1958</option>
                                <option value="1957">1957</option>
                                <option value="1956">1956</option>
                                <option value="1955">1955</option>
                                <option value="1954">1954</option>
                                <option value="1953">1953</option>
                                <option value="1952">1952</option>
                                <option value="1951">1951</option>
                                <option value="1950">1950</option>
                                <option value="1949">1949</option>
                                <option value="1948">1948</option>
                                <option value="1947">1947</option>
                                <option value="1946">1946</option>
                                <option value="1945">1945</option>
                                <option value="1944">1944</option>
                                <option value="1943">1943</option>
                                <option value="1942">1942</option>
                                <option value="1941">1941</option>
                                <option value="1940">1940</option>
                                <option value="1939">1939</option>
                                <option value="1938">1938</option>
                                <option value="1937">1937</option>
                                <option value="1936">1936</option>
                                <option value="1935">1935</option>
                                <option value="1934">1934</option>
                                <option value="1933">1933</option>
                                <option value="1932">1932</option>
                                <option value="1931">1931</option>
                                <option value="1930">1930</option>
                                <option value="1929">1929</option>
                                <option value="1928">1928</option>
                                <option value="1927">1927</option>
                                <option value="1926">1926</option>
                                <option value="1925">1925</option>
                                <option value="1924">1924</option>
                                <option value="1923">1923</option>
                                <option value="1922">1922</option>
                                <option value="1921">1921</option>
                                <option value="1920">1920</option>
                                <option value="1919">1919</option>
                                <option value="1918">1918</option>
                                <option value="1917">1917</option>
                                <option value="1916">1916</option>
                                <option value="1915">1915</option>
                                <option value="1914">1914</option>
                                <option value="1913">1913</option>
                                <option value="1912">1912</option>
                                <option value="1911">1911</option>
                                <option value="1910">1910</option>
                                <option value="1909">1909</option>
                                <option value="1908">1908</option>
                                <option value="1907">1907</option>
                                <option value="1906">1906</option>
                                <option value="1905">1905</option>
                            </select>
                        </div>
                    </div>

                    <div className=' w-full my-2 flex items-center'>
                        <span className=' text-black text-xs'>Death of birth</span>
                        <AiFillQuestionCircle className=' text-gray-500 ml-1 text-sm' />
                    </div>

                    <form className=' w-full'>
                        <div className='flex items-center justify-between'>
                            <div className=' w-[32%] flex justify-between items-center border border-gray-300 rounded px-2 py-1'>
                                <label htmlFor="Female">Female</label>
                                <input type="radio" id='Female' value="Female" checked={gender === 'Female'}
                                    onChange={SelectGender} />
                            </div>
                            <div className=' w-[32%] flex justify-between items-center border border-gray-300 rounded px-2 py-1'>
                                <label htmlFor="Male">Male</label>
                                <input type="radio" id='Male' value="Male" checked={gender === 'Male'} onChange={SelectGender} />
                            </div>
                            <div className=' w-[32%] flex justify-between items-center border border-gray-300 rounded px-2 py-1'>
                                <label htmlFor="Custom">Custom</label>
                                <input type="radio" id='Custom' value="Others" checked={gender === 'Others'} onChange={SelectGender} />
                            </div>
                        </div>
                    </form>
                    <div className=' my-2'>
                        <p className=' text-xs text-gray-500'>By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.</p>
                    </div>
                    <div className=' w-full my-5 flex justify-center'>
                        <button className=' py-[6px] px-16 rounded-md bg-green-600 hover:bg-green-700 text-white font-bold'>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
