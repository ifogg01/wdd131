document.addEventListener('DOMContentLoaded', () => {
    let participantCount = 1;

    const participantsFieldset = document.querySelector('.participants');
    const addButton = document.querySelector('#add');

    function participantTemplate(count) {
        return `
        <section class="participant${count} participant-section">
            <p>Participant ${count}</p>
            <div class="item">
                <label for="fname${count}"> First Name<span>*</span></label>
                <input id="fname${count}" type="text" name="fname${count}" value="" required />
            </div>
            <div class="item activities">
                <label for="activity${count}">Activity #<span>*</span></label>
                <input id="activity${count}" type="text" name="activity${count}" />
            </div>
            <div class="item">
                <label for="fee${count}">Fee ($)<span>*</span></label>
                <input id="fee${count}" type="number" name="fee${count}" />
            </div>
            <div class="item">
                <label for="date${count}">Desired Date <span>*</span></label>
                <input id="date${count}" type="date" name="date${count}" />
            </div>
            <div class="item">
                <p>Grade</p>
                <select id="grade${count}">
                    <option selected value="" disabled selected></option>
                    <option value="1">1st</option>
                    <option value="2">2nd</option>
                    <option value="3">3rd</option>
                    <option value="4">4th</option>
                    <option value="5">5th</option>
                    <option value="6">6th</option>
                    <option value="7">7th</option>
                    <option value="8">8th</option>
                    <option value="9">9th</option>
                    <option value="10">10th</option>
                    <option value="11">11th</option>
                    <option value="12">12th</option>
                </select>
            </div>
        </section>`;
    }

    function successTemplate(info) {
        return `Thank you ${info.name} for registering. You have registered ${info.participantCount} participants and owe $${info.totalFees} in Fees.`;
    }

    function totalFees() {
        let feeElements = document.querySelectorAll("[id^=fee]");
        console.log(feeElements);
        feeElements = [...feeElements];
        const total = feeElements.reduce((sum, input) => sum + (parseFloat(input.value) || 0), 0);
        return total;
    }

    addButton.addEventListener('click', () => {
        participantCount++;
        addButton.insertAdjacentHTML('beforebegin', participantTemplate(participantCount));
    });

    function submitForm(event) {
        event.preventDefault();

        const total = totalFees();

        const adultName = document.querySelector('#adult_name').value;

        const form = document.querySelector('form');
        form.style.display = 'none';

        const summaryElement = document.querySelector('#summary');
        summaryElement.style.display = 'block';

        summaryElement.innerHTML = successTemplate({
            name: adultName,
            participantCount,
            totalFees: total
        });
    }

    const form = document.querySelector('form');
    form.addEventListener('submit', submitForm);
});


