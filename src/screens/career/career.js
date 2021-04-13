import React from 'react';

class Career extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

 render(){
    return(
        <main>
		<div class="main-border">	
			<div class="cms-con">
				<h2 class="title">Career</h2>
				<p class="con">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                 when an unknown printer took a galley of type and scrambled it to make a type 
                 specimen book. It has survived not only five centuries, but also the leap into 
                 electronic typesetting, remaining essentially unchanged. It was popularised in the
                  1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                  recently with desktop publishing software like Aldus PageMaker including versions of 
                  Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                     It has survived not only five centuries, but also the leap into electronic 
                     typesetting, remaining essentially unchanged. It was popularised in the 1960s with 
                     the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
			</div>
			<span class="cut-item top-left"></span>
			<span class="cut-item left-bottom"></span>
			<span class="cut-item top-right"></span>
			<span class="cut-item right-bottom"></span>
			<span class="cut-item bottom"></span>
		</div>
	</main>
    )
 }
}

export default Career;
