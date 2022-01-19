import React, { useEffect, useState } from 'react'
import { AiFillQuestionCircle, AiOutlineClose } from 'react-icons/ai';
import axios from "axios";
import { CgDanger } from 'react-icons/cg';
import { useSelector, useDispatch } from 'react-redux';
import { loading, loadingSuccess, loadingFailure } from '../Redux/UserSlice';
import { Host } from '../Data';


function Register({ createAccount, setCreateAccount }) {

    const serverErr = useSelector((state) => state.User.error);
    const isLoading = useSelector((state) => state.User.isLoading);
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState("")
    const [sureName, setSureName] = useState("")
    const [email, setEmail] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")
    const [password, setPassword] = useState("")
    const [birthDay, setBirthDay] = useState("")
    const [birthMonth, setBirthMonth] = useState("")
    const [birthYear, setBirthYear] = useState("")
    const [gender, setGender] = useState("")
    const [firstNameErr, setFirstNameErr] = useState("")
    const [sureNameErr, setSureNameErr] = useState("")
    const [emailOrMobileErr, setEmailOrMobileErr] = useState("")
    const [passwordErr, setPasswordErr] = useState("")
    const [birthDayErr, setBirthDayErr] = useState("")
    const [birthMonthErr, setBirthMonthErr] = useState("")
    const [birthYearErr, setBirthYearErr] = useState("")
    const [genderErr, setGenderErr] = useState("")
    const [showError, setShowError] = useState("")



    useEffect(() => {

        setFirstName("");
        setSureName("");
        setEmail("");
        setMobileNumber("");
        setPassword("");
        setBirthDay("");
        setBirthMonth("");
        setBirthYear("");
        setGender("");
        setFirstNameErr("");
        setSureNameErr("");
        setEmailOrMobileErr("");
        setPasswordErr("");
        setBirthDayErr("");
        setBirthMonthErr("");
        setBirthYearErr("");
        setGenderErr("");
        setShowError("");

    }, [])

    const SelectGender = (e) => {

        setGender(e.target.value);

        if (genderErr) {
            setGenderErr("")
            setShowError("");
        }
    }

    const emailOrMobile = (value) => {
        let isEmail = value.search("@");
        if (isEmail > 0) {
            setEmail(value)
            setMobileNumber("")
        } else {
            setMobileNumber(value)
            setEmail("")
        }
    }

    const RegisterUser = async (e) => {

        e.preventDefault();
        setFirstNameErr("");
        setSureNameErr("");
        setEmailOrMobileErr("");
        setPasswordErr("");
        setBirthDayErr("");
        setBirthMonthErr("");
        setBirthYearErr("");
        setGenderErr("");
        setShowError("");
        dispatch(loadingFailure(""));
        dispatch(loading());

        if (!firstName) {

            setFirstNameErr("What's your first name?");

        } else if (firstName.length < 3) {

            setFirstNameErr("First name must be at least 3 characters long");

        } else if (!sureName) {

            setSureNameErr("What's your sure name?");

        } else if (sureName.length < 3) {

            setSureNameErr("Sure name must be at least 3 characters long");

        } else if (!email && !mobileNumber) {

            setEmailOrMobileErr("Enter your email or mobile number");
        }
        else if (email && email.length < 10) {

            setEmailOrMobileErr("Email or mobile number contains at least 10 characters");
        }
        else if (mobileNumber && mobileNumber.length < 10) {

            setEmailOrMobileErr("Email or mobile number contains at least 10 characters");
        }
        else if (!password) {

            setPasswordErr("What's your password?");

        } else if (password.length < 6) {

            setPasswordErr("Password must be at least 6 characters long");

        } else if (!birthDay) {

            setBirthDayErr("What's your birth day?");

        } else if (!birthMonth) {

            setBirthMonthErr("What's your birth month?");

        } else if (!birthYear) {

            setBirthYearErr("What's your birth year?");

        } else if (!gender) {

            setGenderErr("Select your gender");

        } else {

            const date = new Date(parseInt(birthYear), parseInt(birthMonth) - 1, parseInt(birthDay));

            const userData = {
                firstName,
                sureName,
                password,
                birthDay: date,
                gender
            }

            email ? userData.email = email : userData.mobileNumber = mobileNumber;

            try {

                const res = await axios.post(`${Host}/api/auth/register`, userData)
                res && setCreateAccount(false);
                res && closeTheForm();

            } catch (error) {

                dispatch(loadingFailure(error.response.data));

            }
        }

    }

    const closeTheForm = () => {

        setFirstName("");
        setSureName("");
        setEmail("");
        setMobileNumber("");
        setPassword("");
        setBirthDay("");
        setBirthMonth("");
        setBirthYear("");
        setGender("");
        setFirstNameErr("");
        setSureNameErr("");
        setEmailOrMobileErr("")
        setPasswordErr("");
        setBirthDayErr("");
        setBirthMonthErr("");
        setBirthYearErr("");
        setGenderErr("");
        setShowError("");
        dispatch(loadingFailure(""));

    }

    const ShowErrorMessage = (error) => {
        setShowError(error)
    }
    const CloseErrorMessage = () => {
        setFirstNameErr("");
        setSureNameErr("");
        setEmailOrMobileErr("")
        setPasswordErr("");
        setBirthDayErr("");
        setBirthMonthErr("");
        setBirthYearErr("");
        setGenderErr("");
        setShowError("");
        dispatch(loadingFailure(""));
    }



    return (
        <div className={`${createAccount ? " visible" : " hidden"} absolute w-full h-full top-0 left-0 flex justify-center bg-white bg-opacity-70 `}>
            <div className={`h-[500px]" mt-32 w-full flex justify-center`}>
                <div className=' bg-white h-[500px] w-[430px] shadow-lg shadow-gray-300 rounded-lg '>
                    <div className=' flex justify-between p-3'>
                        <div>
                            <h2 className=' text-3xl font-bold'>Sign Up</h2>
                            <p className=' text-gray-500 text-sm mt-1'>It is quick and easy</p>
                        </div>
                        <AiOutlineClose onClick={() => { setCreateAccount(false); closeTheForm() }} className=' font-extrabold text-gray-500 text-2xl cursor-pointer' />
                    </div>
                    <hr />
                    <form onSubmit={(e) => RegisterUser(e)} className=' w-full'>
                        <div className=' p-3 w-full'>
                            <div className=' flex justify-between w-full my-1'>
                                <div className={`w-[48%] relative ${firstNameErr && "border border-red-400 animate-shake"}`}>
                                    <input onFocus={CloseErrorMessage} onChange={(e) => { setFirstName(e.target.value) }} value={firstName} type="text" className=' w-full py-2 border border-gray-300 bg-gray-100 px-2 focus:outline-0 rounded placeholder:text-gray-500' placeholder='First name' />
                                    {
                                        showError === "firstNameErr" &&
                                        <div className=' absolute w-full rounded-md right-full top-0 p-2 bg-red-400 text-white font-semibold'>
                                            <p>{firstNameErr}</p>
                                        </div>
                                    }
                                    {
                                        firstNameErr &&
                                        <CgDanger onClick={() => { ShowErrorMessage("firstNameErr") }} className=' text-red-500 absolute top-1/2 right-2 -translate-y-1/2 text-lg cursor-pointer' />
                                    }
                                </div>
                                <div className={`w-[48%] relative ${sureNameErr && "border border-red-400 animate-shake"}`}>
                                    <input onFocus={CloseErrorMessage} onChange={(e) => { setSureName(e.target.value) }} value={sureName} type="text" className=' w-full py-2 border border-gray-300 bg-gray-100 px-2 focus:outline-0 rounded placeholder:text-gray-500' placeholder='Sure name' />
                                    {
                                        showError === "sureNameErr" &&
                                        <div className=' absolute w-full rounded-md left-full top-0 p-2 bg-red-400 text-white font-semibold'>
                                            <p>{sureNameErr}</p>
                                        </div>
                                    }
                                    {
                                        sureNameErr &&
                                        <CgDanger onClick={() => { ShowErrorMessage("sureNameErr") }} className=' text-red-500 absolute top-1/2 right-2 -translate-y-1/2 text-lg cursor-pointer' />
                                    }
                                </div>
                            </div>
                            <div className={`w-full relative my-2 ${emailOrMobileErr ? "border border-red-400 animate-shake" : ""}`}>
                                <input onFocus={CloseErrorMessage} onChange={(e) => { emailOrMobile(e.target.value) }} value={email ? email : mobileNumber} type="text" className=' w-full py-2 border border-gray-300 bg-gray-100 px-2 focus:outline-0 rounded placeholder:text-gray-500' placeholder='Mobile number or email address' />
                                {
                                    showError === "emailOrMobileErr" &&
                                    <div className=' absolute w-4/5 rounded-md right-full top-0 p-2 bg-red-400 text-white font-semibold'>
                                        {
                                            emailOrMobileErr && <p>{emailOrMobileErr}</p>
                                        }
                                    </div>
                                }
                                {
                                    emailOrMobileErr &&
                                    <CgDanger onClick={() => { ShowErrorMessage("emailOrMobileErr") }} className=' text-red-500 absolute top-1/2 right-2 -translate-y-1/2 text-lg cursor-pointer' />
                                }
                            </div>
                            <div className={`w-full my-2 relative ${passwordErr && "border border-red-400 animate-shake"}`}>
                                <input onFocus={CloseErrorMessage} onChange={(e) => { setPassword(e.target.value) }} value={password} type="password" className=' w-full py-2 border border-gray-300 bg-gray-100 px-2 focus:outline-0 rounded placeholder:text-gray-500' placeholder='New password' />
                                {
                                    showError === "passwordErr" &&
                                    <div className=' absolute w-full rounded-md left-full top-0 p-2 bg-red-400 text-white font-semibold'>
                                        <p>{passwordErr}</p>
                                    </div>
                                }
                                {
                                    passwordErr &&
                                    <CgDanger onClick={() => { ShowErrorMessage("passwordErr") }} className=' text-red-500 absolute top-1/2 right-2 -translate-y-1/2 text-lg cursor-pointer' />
                                }
                            </div>
                            <div className=' w-full my-2 flex items-center'>
                                <span className=' text-black text-xs'>Death of birth</span>
                                <AiFillQuestionCircle className=' text-gray-500 ml-1 text-sm' />
                            </div>

                            <div className={` relative flex items-center justify-between`}>
                                <div className={`w-[32%] ${birthDayErr ? "border border-red-400 animate-shake" : ""}`}>
                                    <select onFocus={CloseErrorMessage} onChange={(e) => { setBirthDay(e.target.value) }} value={birthDay} className=' w-full border border-gray-300 focus:outline-0 rounded py-1'>
                                        <option >Day</option>
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
                                <div className={`w-[32%] ${birthMonthErr ? "border border-red-400 animate-shake" : ""}`}>
                                    <select onFocus={CloseErrorMessage} onChange={(e) => { setBirthMonth(e.target.value) }} value={birthMonth} className='w-full border border-gray-300 focus:outline-0 rounded py-1'>
                                        <option >Month</option>
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
                                <div className={`w-[32%] ${birthYearErr ? "border border-red-400 animate-shake" : ""}`}>
                                    <select onFocus={CloseErrorMessage} onChange={(e) => { setBirthYear(e.target.value) }} value={birthYear} className='w-full border border-gray-300 focus:outline-0 rounded py-1'>
                                        <option>Year</option>
                                        <option value="2022" >2022</option>
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
                                {
                                    showError === "BirthErr" &&
                                    <div className=' absolute rounded-md w-1/2 right-full top-0 p-2 bg-red-400 text-white font-semibold'>
                                        {birthDayErr ? <p>{birthDayErr}</p> : null}
                                        {birthMonthErr ? <p>{birthMonthErr}</p> : null}
                                        {birthYearErr ? <p>{birthYearErr}</p> : null}
                                    </div>
                                }
                                {
                                    (birthDayErr || birthMonthErr || birthYearErr) &&
                                    <CgDanger onClick={() => { ShowErrorMessage("BirthErr") }} className=' text-red-500 absolute -top-3 right-2 -translate-y-1/2 text-lg cursor-pointer' />
                                }
                            </div>

                            <div className=' w-full my-2 flex items-center'>
                                <span className=' text-black text-xs'>Gender</span>
                                <AiFillQuestionCircle className=' text-gray-500 ml-1 text-sm' />
                            </div>

                            <div className={` relative flex w-full items-center justify-between `}>
                                <div className={`w-[32%] flex justify-between items-center border border-gray-300 rounded px-2 py-1 ${genderErr ? "border border-red-400 animate-shake" : ""}`}>
                                    <label htmlFor="Female">Female</label>
                                    <input type="radio" id='Female' value="Female" checked={gender === 'Female'}
                                        onChange={SelectGender} />
                                </div>
                                <div className={`w-[32%] flex justify-between items-center border border-gray-300 rounded px-2 py-1 ${genderErr ? "border border-red-400 animate-shake" : ""}`}>
                                    <label htmlFor="Male">Male</label>
                                    <input type="radio" id='Male' value="Male" checked={gender === 'Male'} onChange={SelectGender} />
                                </div>
                                <div className={`w-[32%] flex justify-between items-center border border-gray-300 rounded px-2 py-1 ${genderErr ? "border border-red-400 animate-shake" : ""}`}>
                                    <label htmlFor="Custom">Custom</label>
                                    <input type="radio" id='Custom' value="Others" checked={gender === 'Others'} onChange={SelectGender} />
                                </div>

                                {
                                    showError === "genderErr" &&
                                    <div className=' absolute rounded-md w-1/2 right-full top-0 p-2 bg-red-400 text-white font-semibold'>
                                        <p>{genderErr}</p>
                                    </div>
                                }
                                {
                                    genderErr &&
                                    <CgDanger onClick={() => { ShowErrorMessage("genderErr") }} className=' text-red-500 absolute -top-3 right-2 -translate-y-1/2 text-lg cursor-pointer' />
                                }
                            </div>

                            <div className=' my-2'>
                                <p className=' text-xs text-gray-500'>By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.</p>
                            </div>
                            <div className=' w-full mt-4 mb-1 flex justify-center'>
                                <button disabled={isLoading} className=' py-[6px] px-16 disabled:cursor-not-allowed disabled:bg-green-900 rounded-md bg-green-600 hover:bg-green-700 text-white font-bold'>Sign Up</button>
                            </div>
                            {
                                serverErr && <p className=' text-red-500 font-semibold text-sm text-center'>{serverErr}</p>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
