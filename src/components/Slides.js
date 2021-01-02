import makeCarousel from 'react-reveal/makeCarousel'
import Slide from 'react-reveal/Slide'
import Bounce from 'react-reveal/Bounce'
import '../index.css'
import styled, { css } from 'styled-components'
import ListGroup from 'react-bootstrap/ListGroup'
import SafeAnchor from 'react-bootstrap/SafeAnchor'
import data from './settings.json'

const Arrow = styled.div`
  text-shadow: 1px 1px 1px #fff;
  z-index: 100;
  line-height: 720px;
  text-align: center;
  position: absolute;
  top: 0;
  width: 5%;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  color: #454545;
  ${props => props.right ? css`left: 93.85%;` : css`left: 1.15%;`}
`

const CarouselUI = ({ position, handleClick, children }) => (
    <div>
        {children}
        <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow>
        <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow>
    </div>
)
const Carousel = makeCarousel(CarouselUI);
const r = data.settings.r
const g = data.settings.g
const b = data.settings.b
const a = data.settings.a
const hrSize = data.settings.hrSize
const delay = data.settings.delay
const defaultWait = data.settings.defaultWait


function Slides() {
    return (
        <Carousel defaultWait={defaultWait}>
            <Slide right>
                <section className="slide">
                    <div className="inner-div">
                        <div className="margin-div">
                            <Bounce delay={delay}>
                                <h1>What is React?</h1>
                            </Bounce>

                            <hr size={`${hrSize}`} style={{ color: `rgba(${r}, ${g}, ${b}, ${a})` }} />

                            <ListGroup as="ul">
                                <ListGroup.Item as="li">
                                    React (a.k.a. <b>React.js</b> or <b>ReactJS</b>) is an open-source, front end, JavaScript library for building user interfaces or UI components.
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    React makes it painless to create interactive UIs.
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    It is maintained by <SafeAnchor as="a" href="https://www.facebook.com/">Facebook</SafeAnchor> and a community of individual developers and companies.
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    React can be used as a base in the development of single-page or mobile applications.
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    React was created by <b>Jordan Walke</b>, a software engineer at Facebook.
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible.
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </div>
                </section>
            </Slide>
            <Slide right>
                <section className="slide">
                    <div className="inner-div">
                        <Bounce delay={delay}>
                            <h1>How React Works?</h1>
                        </Bounce>

                        <hr size={hrSize} style={{ color: `rgba(${r}, ${g}, ${b}, ${a})` }} />

                        <ListGroup as="ul">
                            <ListGroup.Item as="li">
                                While building client-side apps, a team at Facebook developers realized that the DOM (Document Object Model) is slow.
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                So, to make it faster, React implements a virtual DOM, that is basically a DOM tree representation in JavaScript.
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                So, when it needs to read or write to the DOM, it will use the virtual representaion of it.
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                Then, the virtual DOM will try to find the most efficient way to update the browser's DOM.
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                Unlike browser DOM elements, React elements are plain objects and are cheap to create.
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                React DOM takes care of updating the DOM to match the React elements.
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                React would make the least amount of changes possible.
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                Although, it keeps copy of a DOM it will still re-render child components if the content in parent has been changed, even the content is not changed in the child components.
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                </section>
            </Slide>
            <Slide right>
                <section className="slide">
                    <div className="inner-div">
                        <Bounce delay={delay}>
                            <h1>Why someone would want to use React?</h1>
                        </Bounce>

                        <hr size={`${hrSize}`} style={{ color: `rgba(${r}, ${g}, ${b}, ${a})` }} />

                        <ListGroup as="ul">
                            <ListGroup.Item as="li">
                                Working with the DOM API is hard.
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                React basically gives developers the ability to work with a virtual browser that is more friendly than the real browser.
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                React’s virtual browser acts like an agent between the developer and the real browser.
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                React enables developers to declaratively describe their User Interfaces and model the state of those interfaces.
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                React is just JavaScript, there is a very small API to learn, just a few functions and how to use them.
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                A JavaScript developer can become a productive React developer in a few hours.
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                Without React or similar libraries, we would need to manually build User Interfaces with native Web APIs and JavaScript.
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                React uses reusable, composable, and stateful components.
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                When the state of a component (the input) changes, the User Interface it represents (the output) changes as well.
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                We rely on the power of JavaScript to generate HTML that depends on some data, rather than enhancing HTML to make it work with that data.
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                </section>
            </Slide>
            <Slide right>
                <section className="slide">
                    <div className="inner-div">
                        <Bounce delay={delay}>
                            <h1>What is Virtual DOM?</h1>
                        </Bounce>

                        <hr size={`${hrSize}`} style={{ color: `rgba(${r}, ${g}, ${b}, ${a})` }} />

                        <ListGroup as="ul">
                            <ListGroup.Item as="li">
                                The virtual DOM is a programming concept where an ideal, or "virtual", representation of a UI is kept in memory and synced with the "real" DOM by a library such as ReactDOM. This process is called as reconciliation.
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                This approach enables the declarative API of React: You tell React what state you want the UI to be in, and it makes sure the DOM matches that state.
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                Rather than touching the DOM directly, we're building an abstract version of it. That's it.
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                We working with some kind of lightweight copy of our DOM.
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                We can change it as we want and then save to our real DOM tree.
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                While saving we should compare, find differences and change (re-render) what should be changed.
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                It is much faster than directly working with DOM.
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                It doesn't require all the heavyweight parts that go into a real DOM.
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                </section>
            </Slide>
            <Slide right>
                <section className="slide">
                    <div className="inner-div">
                        <Bounce delay={delay}>
                            <h1>Summary</h1>
                        </Bounce>

                        <hr size={`${hrSize}`} style={{ color: `rgba(${r}, ${g}, ${b}, ${a})` }} />

                        <ListGroup as="ul">
                            <ListGroup.Item as="li">
                                In essence, the ReactJS interface is different than other JS libraries which are more imperative, meaning you tell them to change DOM directly.
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                JQuery is also like this.
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                ReactJS is more like: here is my state and here is how should you interpret my state and how it will change.
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                Now, I can sit back and let ReactJS handle the expensive and complicated task of making this visible to the user in the browser.
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                Philosophy of React is philosophy of components.
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                Once you understand components, you understand React.
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                </section>
            </Slide>

        </Carousel>
    )

}

export default Slides