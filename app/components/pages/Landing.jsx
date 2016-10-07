import React from 'react'
import CountDowns from 'app/components/elements/LandingCountDowns'
import Distribution from 'app/components/elements/LandingDistribution'
import WhatIsGolos from 'app/components/elements/LandingWhatIsGolos'
import JoinUs from 'app/components/elements/LandingJoinUs'
import Documentation from 'app/components/elements/LandingDocumentation'
import WhoWeAre from 'app/components/elements/LandingWhoWeAre'
import BlockchainRevolution from 'app/components/elements/LandingBlockchainRevolution'
import Faq from 'app/components/elements/LandingFaq'
import WhyGolos from 'app/components/elements/LandingWhyGolos'
import Team from 'app/components/elements/LandingTeam'
import Press from 'app/components/elements/LandingPress'
import Partners from 'app/components/elements/LandingPartners'
import Footer from 'app/components/elements/LandingFooter'

/*
    NOTE there was so little time and so much todo, thats why code is clumsy and
    there is little to no comments
	TODO add comments
*/

// format date properly
function createDate(month, day, hours, minutes) {
	const today = new Date()
	const mins = minutes == 0 || !minutes ? 0 : today.getMinutes()
	const date = new Date(2016, month, day, hours || today.getHours(), mins, today.getSeconds())
	return date
}

const buyGolosButton = <a href="" className="button Landing__button_big">Купи <strong>Силу Голоса</strong></a>

const blockchainStartAt = createDate(9, 15, 15, 0)
const crowdsaleStartAt = createDate(10, 1, 15, 0)
const crowdsaleEndAt = createDate(11, 1, 15, 0)

class Landing extends React.Component {

    render() {
        // if crodwsale hasn't started yet render countdown til crodwsale start
        // if (crowdsaleStartAt > Date.now()) return <CountDowns prefill crowdsaleStartAt={crowdsaleStartAt} blockchainStartAt={blockchainStartAt} />
		const prefill = crowdsaleStartAt > Date.now()

        return (
            <div className="Landing text-center">
                <CountDowns
					prefill={prefill}
					crowdsaleStartAt={crowdsaleStartAt}
					blockchainStartAt={blockchainStartAt}
					crowdsaleEndAt={crowdsaleEndAt}
					button={buyGolosButton}
				/>
                {/* <Distribution /> */}
                {/* <WhatIsGolos /> */}
                <JoinUs />
                <Documentation />
                <WhoWeAre />
                <BlockchainRevolution />
                <Faq />
                <Team />
                <WhyGolos />
				<Partners />
                <Press button={buyGolosButton} />
                <Footer />
            </div>
        )
    }
}

module.exports = {
    path: 'landing.html',
    component: Landing
};