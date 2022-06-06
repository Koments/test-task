import { useEffect, useState } from 'react';
import { PostRequestStyles, PostTitle, FormContainer, PersonalInfoContailer, InputContainer, FlexColumn, InfoInput, LabelPhone, PositionContainer, PositionTitle, RadioBtnsContainer, UploadFilesContainer, UploadLabel, UploadBtnContainer, UploadBtn, UploadFileName, PostBtn, PostBtnContainer, SuccessPost, ErrorInfo } from "./styled-components"
import { postUser } from '../../utils/utils';
import { positionJSON } from './utils';

export function PostRequest(props) {

    const [positions, setPosition] = useState([]);
    const [positionsUser, setPositionUser] = useState('');
    const [nameUser, setNameUser] = useState('');
    const [emailUser, setEmailUser] = useState('');
    const [phonelUser, setPhoneUser] = useState('');
    const [file, setFile] = useState({});
    const [success, setSuccess] = useState(false);
    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPhone, setErrorPhone] = useState('+38 (XXX) XXX - XX - XX');

    useEffect(() => {
        positionJSON().then((result) => {

            setPosition(result.positions);
        });
    }, []);

    return (
        <PostRequestStyles>
            {!success ?
                (
                    <div>
                        <PostTitle>Working with POST request</PostTitle>
                        <form action="" method="post">
                            <FormContainer>
                                <PersonalInfoContailer>
                                    <InputContainer>
                                        <InfoInput type="text" name="name" placeholder="Your name" onChange={event => setNameUser(event.target.value)} onClick={() => { setErrorName('') }}/>
                                        <ErrorInfo>{errorName}</ErrorInfo>
                                    </InputContainer>
                                    <InputContainer>
                                        <InfoInput type="text" name="email" placeholder="Email" onChange={event => setEmailUser(event.target.value)} onClick={() => { setErrorEmail('') }}/>
                                        <ErrorInfo>{errorEmail}</ErrorInfo>
                                    </InputContainer>
                                    <InputContainer>
                                        <FlexColumn>
                                            <InfoInput id='phone' type="text" name="phone" placeholder="Phone" onChange={event => setPhoneUser(event.target.value)} onClick={() => { setErrorPhone('+38 (XXX) XXX - XX - XX') }}/>
                                            <LabelPhone htmlFor="phone">{errorPhone}</LabelPhone>
                                        </FlexColumn>
                                    </InputContainer>
                                </PersonalInfoContailer>
                                <PositionContainer>
                                    <PositionTitle>Select your position</PositionTitle>
                                    {positions.map((position, index) => (
                                        <RadioBtnsContainer key={index}>
                                            <input type="radio" id={position.id} name="position" onChange={e => setPositionUser(e.target.id)} />
                                            <div htmlFor={'radio-btn-' + position.name}>{position.name}</div>
                                        </RadioBtnsContainer>
                                    ))}
                                </PositionContainer>
                                <UploadFilesContainer>
                                    <UploadBtnContainer>
                                        <UploadLabel htmlFor="filePicker">
                                            Upload
                                        </UploadLabel>
                                        <UploadBtn id="filePicker" className="upload-btn" type="file" onChange={e => setFile(e.target.files[0])} />
                                    </UploadBtnContainer>
                                    <UploadFileName>{file.name ?? 'Upload your photo'}</UploadFileName>
                                </UploadFilesContainer>
                                <PostBtnContainer>
                                    <PostBtn type='button' onClick={async () => {

                                        const resultPost = await postUser(positionsUser, nameUser, emailUser, phonelUser, file);
                                        const errors = resultPost.fails;
                                        if (resultPost.success === true) {

                                            setSuccess(true);
                                            props.onSuccess();

                                        } else if (resultPost.message === "User with this phone or email already exist"){

                                            setErrorEmail(resultPost.message);
                                            setErrorPhone(resultPost.message);
                                        } else {

                                            setErrorName(errors.name ?? "");
                                            setErrorEmail(errors.email ?? "");
                                            setErrorPhone(errors.phone ?? '+38 (XXX) XXX - XX - XX');
                                        }
                                    }}>
                                        Sign up
                                    </PostBtn>
                                </PostBtnContainer>
                            </FormContainer>
                        </form>
                    </div>
                )
                :
                (
                    <div>
                        <h2>User successfully registered</h2>
                        <SuccessPost src='icons/success-image.svg' />
                    </div>
                )}
        </PostRequestStyles>

    );
}