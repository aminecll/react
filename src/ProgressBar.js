import React, { Component } from 'react';
class ProgressBar extends Component {
    render() {
        return (
            <div>
                <div className=" progress "  styles={{marginBottom: '0px'}}  >
                         <div id="1" className="progress-bar bg-success progress-bar-striped" role="progressbar" styles={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                         </div>
                                <span id="percent">50%</span>
                </div>
                {/*<script type="text/javascript">

                progressBar({{event.id}},{{event.nbrParticipants}} , {{event.nbrMax}});
                        function progressBar(id, actual, max) {
                            var progressBar = document.getElementById(id);
                            var percent = ((100 * parseFloat(actual)) / parseFloat(max));
                            var percentVal = percent.toFixed();
                            progressBar.style.width = percentVal + '%';

                            var eventClients = document.getElementById('eventClient_{{event.id}}');


                            if (actual < max) {
                                progressBar.classList.remove('bg-success');
                                progressBar.classList.remove('bg-danger');
                                progressBar.classList.add('bg-warning');
                            } else if (actual == max) {
                                progressBar.classList.remove('bg-warning');
                                progressBar.classList.remove('bg-danger');
                                progressBar.classList.add('bg-success');
                                eventClients.innerHTML = '<b>COMPLET</b>';
                            }

                            var percent_val = document.getElementById('percent_{{event.id}}');
                            percent_val.innerHTML = percentVal + '%'; // afficher la pourcentage sous progressbar


                        }

                    </script>*/}
            </div>
           
        );
    }
}

export default ProgressBar;