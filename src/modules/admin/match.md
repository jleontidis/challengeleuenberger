<!-- 
Adding matches
  Add matches to the database
  <form method="post" submit.delegate="submit()">
      <div class="form-group">
        <label for="team_name_input">Home Team</label>
        <select value.bind="selectedHomeTeamId">
            <option model.bind="null">Choose...</option>
            <option repeat.for="team of teams"
                    model.bind="team.id">
              ${team.id} - ${team.team_name}
            </option>
          </select>
      </div>
      <div class="form-group">
          <label for="team_logo_input">Away Team</label>
          <select value.bind="selectedAwayTeamId">
            <option model.bind="null">Choose...</option>
            <option repeat.for="team of teams"
                    model.bind="team.id">
              ${team.id} - ${team.team_name}
            </option>
          </select>
      </div>
      <div class="form-group">
        <label for="team_logo_input">Match time</label>
        <input type="datetime-local" class="form-control" id="team_logo_input" placeholder="Enter match time" value.bind="match_time">
      </div>
      <div class="form-group">
        <label for="team_logo_input">Location</label>
        <select value.bind="selectedLocation">
            <option model.bind="null">Choose...</option>
            <option>côté ouest (horloge)</option>
            <option>côté est</option>
          </select>
      </div>
      <button type="submit" class="btn btn-secondary">Add Match</button>
    </form>
  
  
  -!>