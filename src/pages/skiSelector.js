import React from "react"
import Layout from "../components/layout"
import skiSelectorStyles from "../components/skiSelector.module.css"

export default class Home extends React.Component {
    state = {
        skiStyle: "",
        skiAbility: "",
    }

    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value,
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log('detecting something')
        alert('This feature is not available.')
    }

    render () {
        return (
            <Layout>
                <h1>Ski Selector</h1>
                <form className={skiSelectorStyles.skiSelectorForm} onSubmit={this.handleSubmit}>
                    <p>Select Type of Ski</p>
                    <label>Race
                        <input type="radio" id="race" name="skiType" value={this.state.skiStyle} onChange={this.handleInputChange}></input>
                    </label>
                    <label>All Mountain
                        <input type="radio" id="allMountain" name="skiType" value={this.state.skiStyle} onChange={this.handleInputChange}></input>
                    </label>
                    <label>Powder
                        <input type="radio" id="powder" name="skiType" value={this.state.skiStyle} onChange={this.handleInputChange}></input>
                    </label>
                    <label>Backcountry
                        <input type="radio" id="backcountry" name="skiType" value={this.state.skiStyle} onChange={this.handleInputChange}></input>
                    </label>

                    <br></br>
                    <br></br>

                    <p>Select Ski Ability</p>
                    <label>Beginner
                        <input type="radio" id="beginner" name="skiAbility" value={this.state.skiAbility} onChange={this.handleInputChange}></input>
                    </label>
                    <label>Intermediate
                        <input type="radio" id="intermediate" name="skiAbility" value={this.state.skiAbility} onChange={this.handleInputChange}></input>
                    </label>
                    <label>Advanced
                        <input type="radio" id="advanced" name="skiAbility" value={this.state.skiAbility} onChange={this.handleInputChange}></input>
                    </label>

                    <p>Select height</p>
                    <button type="submit">Submit</button>
                </form>
            </Layout>
        )
    }
}